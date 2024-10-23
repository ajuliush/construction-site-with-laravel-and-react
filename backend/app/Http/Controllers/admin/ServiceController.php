<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;

use App\Models\Service;
use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use App\Models\TempImage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::orderBy('id', 'DESC')->get();
        return response()->json([
            'status' => true,
            'message' => 'Services fetched successfully.',
            'data' => $services,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreServiceRequest $request)
    {
        $model = new Service();
        $model->title = $request->title;
        $model->short_description = $request->short_description;
        $model->slug = Str::Slug($request->slug);
        $model->content = $request->content;
        $model->status = $request->status;
        $model->save();
        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode(".", $tempImage->image);
                $ext = last($extArray);

                $fileName = strtotime('now') . $model->id . "." . $ext;
                //Create small image thumbnail 
                $sourcePath = public_path('uploads/temp_images') . '/' . $tempImage->image;
                $destinationPath = public_path('uploads/services/small') . '/' . $fileName;
                $manager = new ImageManager(new Driver());
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destinationPath);

                //Create large image thumbnail 
                $destinationPath = public_path('uploads/services/large') . '/' . $fileName;
                $manager = new ImageManager(new Driver());
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);
                $model->image = $fileName;
                $model->save();
            }
        }
        return response()->json([
            'status' => true,
            'message' => 'Service created successfully.',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            // Fetch the service instance
            $service = Service::findOrFail($id); // Changed to findOrFail

            return response()->json([
                'status' => true,
                'data' => $service,
                'message' => 'Service fetched successfully.', // Updated message
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            // Return a response if the service is not found
            return response()->json([
                'status' => false,
                'message' => 'Service not found.',
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServiceRequest $request, Service $service)
    {
        try {
            // Fetch the service instance
            $service = Service::findOrFail($request->id);

            // Update service fields
            $service->title = $request->title;
            $service->short_description = $request->short_description;
            $service->slug = Str::slug($request->slug);
            $service->content = $request->content;
            $service->status = $request->status;
            $service->save();
            if ($request->imageId > 0) {
                $oldImage = $service->image;
                $tempImage = TempImage::find($request->imageId);
                if ($tempImage != null) {
                    $extArray = explode(".", $tempImage->image);
                    $ext = last($extArray);

                    $fileName = strtotime('now') . $service->id . "." . $ext;
                    //Create small image thumbnail 
                    $sourcePath = public_path('uploads/temp_images') . '/' . $tempImage->image;
                    $destinationPath = public_path('uploads/services/small') . '/' . $fileName;
                    $manager = new ImageManager(new Driver());
                    $image = $manager->read($sourcePath);
                    $image->coverDown(500, 600);
                    $image->save($destinationPath);

                    //Create large image thumbnail 
                    $destinationPath = public_path('uploads/services/large') . '/' . $fileName;
                    $manager = new ImageManager(new Driver());
                    $image = $manager->read($sourcePath);
                    $image->scaleDown(1200);
                    $image->save($destinationPath);
                    $service->image = $fileName;
                    $service->save();
                    if ($oldImage != null) {
                        File::delete(public_path('uploads/services/small') . '/' . $oldImage);
                        File::delete(public_path('uploads/services/large') . '/' . $oldImage);
                    }
                }
            }

            return response()->json([
                'status' => true,
                'message' => 'Service updated successfully.',
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            // Return a response if the service is not found
            return response()->json([
                'status' => false,
                'message' => 'Service not found.',
            ], 404);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            // Fetch the service instance
            $service = Service::findOrFail($id); // Changed to findOrFail

            // Delete associated image files if they exist
            if ($service->image) {
                File::delete(public_path('uploads/services/small') . '/' . $service->image);
                File::delete(public_path('uploads/services/large') . '/' . $service->image);
            }
            $service->delete();
            return response()->json([
                'status' => true,
                'message' => 'Service delete successfully.', // Updated message
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            // Return a response if the service is not found
            return response()->json([
                'status' => false,
                'message' => 'Service not found.',
            ], 404);
        }
    }
}