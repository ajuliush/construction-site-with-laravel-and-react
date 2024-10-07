<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;

use App\Models\TempImage;
use App\Http\Requests\StoreTempImageRequest;
use App\Http\Requests\UpdateTempImageRequest;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class TempImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreTempImageRequest $request)
    {
        $image = $request->file('image');
        $ext = $image->getClientOriginalExtension();
        $imageName = strtotime('now') . '.' . $ext;
        $Model = new TempImage();
        $Model->image = $imageName;
        $Model->save();
        //Save image in uploads/temp_images folder
        $image->move(public_path('uploads/temp_images'), $imageName);
        //Resize image
        $sourcePath = public_path('uploads/temp_images') . '/' . $imageName;
        $destinationPath = public_path('uploads/temp_images/thumbnails') . '/' . $imageName;
        $manager = new ImageManager(new Driver());
        $image = $manager->read($sourcePath);
        $image->coverDown(300, 300);
        $image->save($destinationPath);
        return response()->json([
            'status' => true,
            'data' => $Model,
            'message' => 'Image uploaded successfully',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(TempImage $tempImage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TempImage $tempImage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTempImageRequest $request, TempImage $tempImage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TempImage $tempImage)
    {
        //
    }
}