<?php

namespace App\Http\Controllers;

use App\Models\Fields;
use Illuminate\Http\Request;
use Validator;

class FieldsController extends Controller
{
    public function index()
    {
        return response()->json(Fields::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'labels' => 'required|array',
            'data' => 'required|array',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $form = Fields::create([
            'name' => $request->name,
        ]);

        foreach ($request->labels as $field => $label) {
            $form->fields()->create([
                'label' => $label,
                'type' => $field, // Assuming field names represent types
                'value' => $request->data[$field],
            ]);
        }

        return response()->json([
            'message' => 'Form created successfully!',
            'form' => $form,
        ]);
    }
    public function update(Request $request, Fields $field)
{
    $field->update($request->validated());

    return response()->json([
        'message' => 'Field updated successfully!',
        'field' => $field,
    ]);
}
public function destroy(Fields $field)
{
    $field->delete();

    return response()->json([
        'message' => 'Field deleted successfully!',
    ]);
}
}