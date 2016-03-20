<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Http\Requests;
use App\Link;

class LinksController extends Controller
{
    /**
     * Return all links of the logged in user.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->user->links()->with('tags')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return redirect('/home');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $link = new Link($request->all());

        $this->user->links()->save($link);

        return response()->json([
            'data' => $link,
            'message' => 'Link Created'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->user->links()->findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return redirect('/home');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $link = $this->user->links()->findOrFail($id);

        $link->update($request->all());

        return response()->json([
            'data' => $link,
            'message' => 'Link Edited'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $link = $this->user->links()->findOrFail($id);

        $link->delete();

        return response()->json([
            'message' => 'Link Deleted'
        ], 200);
    }
}
