<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;
use App\Tag;
use Illuminate\Support\Facades\Auth;

class LinkRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $tags = request()->tags;
        $userId = Auth::user()->id;

        // Check if the user owns all the tags proviced through the 
        // AJAX request. If not, return an error
        
        foreach($tags as $tag) {
            if(! Tag::where('id', $tag['id'])->where('user_id', $userId)->exists()) {
                return false;
            }
        }

        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'url' => 'required|url',
            'title' => 'required',
        ];
    }

    /**
     * Override Illuminate\Foundation\Http\FormRequest's method
     * to change the message displayed on forbidden action
     * 
     * @return \Illuminate\Http\Response
     */
    public function forbiddenResponse()
    {
        return response()->json([
            'message' => 'You are not authorized to modify the requested tags'
        ], 403);
    }
}
