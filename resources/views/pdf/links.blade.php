<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>

  <style>
    body {
      font-family: sans-serif;
      line-height: 20px;
      font-size: 16px;
      color: #333;
    }
    h1 {
      font-weight: 300;
    }
    p {
      border: 1px solid #eee;
      border-left: 5px solid #5bc1ed;
      padding: 10px;
    }
  </style>
</head>
<body>
  <h1>Url Project</h1>
  @foreach (Auth::user()->links as $link)
    <p>
      <strong>Url: </strong><a href="{{ $link->url }}">{{ $link->url }}</a><br>
      <strong>Title: </strong>{{ $link->title }}<br>
      <strong>Description: </strong>{{ $link->description }}
    </p>
  @endforeach
</body>
</html>