<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProjectRequest;
use App\Models\Project;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

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
        //
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}