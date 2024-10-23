<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::orderBy('id', 'desc')->get();
        return response()->json([
            'status' => true,
            'message' => 'Projects fetched successfully.',
            'data' => $projects,
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
    public function store(StoreProjectRequest $request)
    {
        $request->merge(['slug' => Str::slug($request->slug)]);
        $project = new Project();
        $project->title = $request->title;
        $project->slug = Str::Slug($request->slug);
        $project->description = $request->description;
        $project->content = $request->content;
        $project->construction_type = $request->construction_type;
        $project->sector = $request->sector;
        $project->location = $request->location;
        $project->status = $request->status;
        $project->save();

        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode(".", $tempImage->image);
                $ext = last($extArray);

                $fileName = strtotime('now') . $project->id . "." . $ext;
                //Create small image thumbnail 
                $sourcePath = public_path('uploads/temp_images') . '/' . $tempImage->image;
                $destinationPath = public_path('uploads/projects/small') . '/' . $fileName;
                $manager = new ImageManager(new Driver());
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destinationPath);

                //Create large image thumbnail 
                $destinationPath = public_path('uploads/projects/large') . '/' . $fileName;
                $manager = new ImageManager(new Driver());
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);
                $project->image = $fileName;
                $project->save();
            }
        }
        return response()->json([
            'status' => true,
            'message' => 'Project created successfully.',
        ]);
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            // Fetch the project instance
            $project = Project::findOrFail($id); // Changed to findOrFail

            return response()->json([
                'status' => true,
                'data' => $project,
                'message' => 'Project fetched successfully.', // Updated message
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            // Return a response if the Project is not found
            return response()->json([
                'status' => false,
                'message' => 'Project not found.',
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        try {
            // Fetch the project instance
            $project = Project::findOrFail($request->id);

            // Update project fields
            $project->title = $request->title;
            $project->slug = Str::Slug($request->slug);
            $project->description = $request->description;
            $project->content = $request->content;
            $project->construction_type = $request->construction_type;
            $project->sector = $request->sector;
            $project->location = $request->location;
            $project->status = $request->status;
            $project->save();
            if ($request->imageId > 0) {
                $oldImage = $project->image;
                $tempImage = TempImage::find($request->imageId);
                if ($tempImage != null) {
                    $extArray = explode(".", $tempImage->image);
                    $ext = last($extArray);

                    $fileName = strtotime('now') . $project->id . "." . $ext;
                    //Create small image thumbnail 
                    $sourcePath = public_path('uploads/temp_images') . '/' . $tempImage->image;
                    $destinationPath = public_path('uploads/projects/small') . '/' . $fileName;
                    $manager = new ImageManager(new Driver());
                    $image = $manager->read($sourcePath);
                    $image->coverDown(500, 600);
                    $image->save($destinationPath);

                    //Create large image thumbnail 
                    $destinationPath = public_path('uploads/projects/large') . '/' . $fileName;
                    $manager = new ImageManager(new Driver());
                    $image = $manager->read($sourcePath);
                    $image->scaleDown(1200);
                    $image->save($destinationPath);
                    $project->image = $fileName;
                    $project->save();
                    if ($oldImage != null) {
                        File::delete(public_path('uploads/projects/small') . '/' . $oldImage);
                        File::delete(public_path('uploads/projects/large') . '/' . $oldImage);
                    }
                }
            }

            return response()->json([
                'status' => true,
                'message' => 'Project updated successfully.',
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            // Return a response if the project is not found
            return response()->json([
                'status' => false,
                'message' => 'Project not found.',
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            // Fetch the project instance
            $project = Project::findOrFail($id); // Changed to findOrFail

            // Delete associated image files if they exist
            if ($project->image) {
                File::delete(public_path('uploads/projects/small') . '/' . $project->image);
                File::delete(public_path('uploads/projects/large') . '/' . $project->image);
            }

            $project->delete();
            return response()->json([
                'status' => true,
                'message' => 'Project deleted successfully.', // Updated message
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            // Return a response if the project is not found
            return response()->json([
                'status' => false,
                'message' => 'Project not found.',
            ], 404);
        }
    }
}