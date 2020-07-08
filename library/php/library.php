<?php
  $hide = $_REQUEST["hide"];
  // echo($hide);
  $conn = mysqli_connect("127.0.0.1","root","","h52002",3306);
  mysqli_query($conn,"SET NAMES utf8");
  // 查询
  if($hide == "0"){
    $sql = "SELECT * FROM library";
    $result = mysqli_query($conn,$sql);
    $arr = [];
    while(($ass = mysqli_fetch_assoc($result))!=null){
      array_push($arr,$ass);
    }
    echo json_encode($arr);
    // 
  }else if($hide == "1"){
    $title = $_POST["title"];
    $author = $_POST["author"];
    $price = $_POST["price"];
    $amount = $_POST["amount"];
    $synopsis = $_POST["synopsis"];
    $content = $_POST["content"];
    $img = $_POST["img"];
    $vip = $_POST["vip"];

    $sql = "INSERT INTO library VALUE(0,'$title','$author',$price,$amount,'$synopsis','$content',$vip,'$img')";
    $reslut = mysqli_query($conn,$sql);
    if($reslut == "1"){
      echo("<script>location='../manage.html';var evt = new Event('click');as[0].dispatchEvent(evt);</script>");
    }else{
      echo("新增失败");
    }
    // 以下是登录
  }else if($hide == "2"){
    $name = $_GET["name"];
    $pwd = $_GET["pwd"];
    $sql = "SELECT * FROM woman";
    $result = mysqli_query($conn,$sql);
    while(($ass = mysqli_fetch_assoc($result))!=null){
      if($name == $ass["name"] && $pwd == $ass["pwd"]){
        echo("<script>location.href = '../manage.html';sessionStorage['vip']={$ass['vip']};sessionStorage['name']='{$ass['name']}'</script>");
        return false;
      }
    }
    echo("<script>location.href = '../login.html?isLogin=false'</script>");
    // 以下是注册提交
    }else if($hide == "3"){
      $name = $_POST["name"];
      $pwd = $_POST["pwd"];
      $vip = $_POST["vip"];
      $sql = "INSERT INTO woman VALUES(0,'$name','$pwd',$vip,'')";
      $result = mysqli_query($conn,$sql);
      echo("<script>location.href = '../login.html'</script>");
      // 以下是输入用户名blur时ajax
      }else if($hide == "4"){
        $sql = "SELECT name FROM woman";
        $result = mysqli_query($conn,$sql);
        $arr = [];
        while(($row = mysqli_fetch_row($result))!=null){
          array_push($arr,$row);
        }
        echo json_encode($arr);
        }else if($hide == "5"){
          $id = $_REQUEST["id"];
          $sql = "DELETE FROM library WHERE id={$id}";
          $result = mysqli_query($conn,$sql);
          echo($result);
          }
