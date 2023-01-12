$(document).ready(function(){


    function getConfirmation(a) {
        var retVal = confirm(`You are about to ${a} this admin?`);
        if( retVal == true ) {
            if(a == "Activate"){
                alert(`Admin ${a}d`);
            } else if(a == "Suspend"){
                alert(`Admin ${a}ed`);
            }
           return true;
        } else {
           alert("Cancelled");
           return false;
        }
     }

     $(".table .activate").on("click", function(){
        var val = $(this).text();
        getConfirmation(val);
    });

     $(".table .suspend").on("click", function(){
        var val = $(this).text();
        getConfirmation(val);
    });


    function getPostActionConfirmation(a) {
        var retVal = confirm(`You are about to ${a} this post, do you wish to continue?`);
        if( retVal == true ) {
            if(a == "publish"){
                alert(`Post ${a}ed`);
            } else if(a == "unpublish"){
                alert(`Post ${a}ed`);
            }else if(a == "delete"){
                alert(`Post ${a}d`);
            }
           return true;
        } else {
           alert("Cancelled");
           return false;
        }
     }

     $(".table .publish").on("click", function(){
        var val = $(this).text();
        getPostActionConfirmation(val);
    });
     $(".table .unpublish").on("click", function(){
        var val = $(this).text();
        getPostActionConfirmation(val);
    });
     $(".table .delete").on("click", function(){
        var val = $(this).text();
        getPostActionConfirmation(val);
    });


    tinymce.init({
        selector: '#blog-edito',
        plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
        menubar: 'file edit view insert format tools table help',
        toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
        toolbar_sticky: true,
        autosave_ask_before_unload: true,
        autosave_interval: '30s',
        autosave_prefix: '{path}{query}-{id}-',
        autosave_restore_when_empty: false,
        autosave_retention: '2m',
        image_advtab: true,
        image_title: true,
        automatic_uploads: true,
        file_picker_types: 'file image media',
        link_list: [
          { title: 'My page 1', value: 'https://www.codexworld.com' },
          { title: 'My page 2', value: 'http://www.codexqa.com' }
        ],
        image_list: [
          { title: 'My page 1', value: 'https://www.codexworld.com' },
          { title: 'My page 2', value: 'http://www.codexqa.com' }
        ],
        image_class_list: [
          { title: 'None', value: '' },
          { title: 'Some class', value: 'class-name' }
        ],
        importcss_append: true,
        
        file_picker_callback: function (cb, value, meta) {
          var input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.setAttribute('accept', 'image/*');
          input.setAttribute('class', 'blog-img');
      
          input.onchange = function () {
            var file = this.files[0];
      
            var reader = new FileReader();
            reader.onload = function () {
  
              var id = 'blobid' + (new Date()).getTime();
              var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
              var base64 = reader.result.split(',')[1];
              var blobInfo = blobCache.create(id, file, base64);
              blobCache.add(blobInfo);
      
              /* call the callback and populate the Title field with the file name */
              cb(blobInfo.blobUri(), { title: file.name });
            };
            reader.readAsDataURL(file);
          };
      
          input.click();
        },
        templates: [
          { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
          { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
          { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
        ],
        template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
        template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
        image_caption: true,
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
        noneditable_class: 'mceNonEditable',
        toolbar_mode: 'sliding',
        contextmenu: 'link image table',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
    });


    $("#add-post-btn").click(function(){
      $(".blog-table-container").addClass("d-none");
      $(this).addClass("d-none");
      $(".add-blog-container").removeClass("d-none");
    })

    $("#btn-submit-blog").click(function(){
      $(".blog-table-container").removeClass("d-none");
      $(".add-blog-container").addClass("d-none");
    })

    $("#edit").click(function(){
      $(".blog-table-container").addClass("d-none");
      $(".add-blog-container").removeClass("d-none");
    })

    $(".container-close").click(function(){
      $(".blog-table-container").removeClass("d-none");
      $(".add-blog-container").addClass("d-none");
      $("#add-post-btn").removeClass("d-none");
    })
    
})