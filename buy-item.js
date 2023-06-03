   
   
   
   
   $(document).ready(function(){
    $('#image').imagezoomsl({
        zoomrange:[3, 3]
    });
    });

    $(document).ready(function(){
       $('.sub-menu').parent('li').addClass('has-child');
    });

    function check1(){
        document.getElementById("sizenone").innerHTML = "Chỉ còn lại 2 sản phẩm";
    }
    function check2(){
        document.getElementById("sizenone").innerHTML = "Còn hàng";
    }
    function check3(){
        document.getElementById("sizenone").innerHTML = "Hết hàng";
    }

      document.getElementById("showcart").style.display = "none";


    $('input.text6a').each(function() {
        var $this = $(this),
            qty= $this.parent().find('.press'),
            min = Number($this.attr('min')),
            max = Number($this.attr('max'))
        if (min == 0) {
            var d = 0
        } else d = min
        $(qty).on('click', function() {
            if ($(this).hasClass('distribute')) {
                if (d > min) d += -1
            } else if ($(this).hasClass('add')) {
                var x = Number($this.val()) + 1
                if (x <= max) d += 1
            }
            $this.attr('value', d).val(d)
        })
      })  



   




     var giohang = new Array();

    function themgiohang(x){
        var boxsp = x.parentElement.children;
        var hinh = boxsp[0].children[0].src;
        var gia = boxsp[3].innerText;
        var tensp = boxsp[2].innerText;
        var soluong = parseInt(boxsp[5].children[1].value);
        var sp = new Array(hinh, gia, tensp, soluong);
        var kt = 0;
        for (let i = 0; i < giohang.length; i++) {
            if(giohang[i][2]==tensp){
                kt = 1;
                soluong +=parseInt(giohang[i][3]);
                giohang[i][3] =soluong;
                break;
            }
            
        }
        if(kt == 0){
            giohang.push(sp);
        }

        showcountsp();


        sessionStorage.setItem("giohang",JSON.stringify(giohang));
    }
    function showcountsp(){
        document.getElementById("countsp").innerHTML = giohang.length;
    }

    function showcart(){
       var x =  document.getElementById("showcart");
       var sl = "";
       if(x.style.display == "block")
       {
            x.style.display = "none";
       }
       else {
            x.style.display = "block";
            showmycart();
       }
    }

    function showmycart(){
        var ttgh = "";
        var tong = 0;
        for (let i = 0; i < giohang.length; i++) {
            var tt = parseInt(giohang[i][1]) * parseInt(giohang[i][3]);
            tong += tt;
           ttgh +='  <tr class="showcart1">'+
                '<td>'+(i + 1)+'</td>'+
                '<td><img src="'+ giohang[i][0] +'" alt=""></td>'+
                '<td>'+ giohang[i][2] +'</td>'+
                '<td>'+ giohang[i][1] +'</td>'+
                '<td>'+ giohang[i][3] +'</td>'+
                '<td>'+
                    '<div>'+ tt*1000 + '₫</div>'+
               '</td>'+
               '<td>'+
                    '<button onclick="xoasp(this)">Xóa</button>'+
               '</td>'+
            '</tr>';   
        }
        ttgh +='<tr class="showcart1">'+
                '<th colspan="5">Tổng đơn hàng</th>'+
                '<th>'+
                    '<div>'+ tong*1000 +' ₫</div>'+
                '</th>'+
                '<th></th>'+
            '</tr>';
        document.getElementById("mycart").innerHTML = ttgh;
    }

    function xoasp(x){
        var tr = x.parentElement.parentElement;
        var tensp = tr.children[2].innerText;
        tr.remove();
        // alert(tensp);
        for (let i = 0; i < giohang.length; i++) {
            if(giohang[i][2] == tensp){
                giohang.splice(i,1);
            } 
        }
        showmycart();
        showcountsp();
    }

    function xoatatca(){
        giohang = [];
        showmycart();
        showcountsp();
    }
    function dongydathang(){
        var ttnh = document.getElementById("thongtinnhanhang").children;
        var hoten = ttnh[0].children[1].children[0].value;
        var diachi = ttnh[1].children[1].children[0].value;
        var dienthoai = ttnh[2].children[1].children[0].value;
        var email = ttnh[3].children[1].children[0].value;

        var nguoinhan = new Array(hoten, diachi, dienthoai, email);

        sessionStorage.setItem("nguoinhan",JSON.stringify(nguoinhan));

        window.location.assign("donhang.html");
    }