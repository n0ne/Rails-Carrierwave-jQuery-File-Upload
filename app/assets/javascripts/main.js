/*
 * jQuery File Upload Plugin JS Example 6.5.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, unparam: true, regexp: true */
/*global $, window, document */

$(function () {

    function update(coords)
    {
      $('#picture_crop_x').val(coords.x)
      $('#picture_crop_y').val(coords.y)
      $('#picture_crop_w').val(coords.w)
      $('#picture_crop_h').val(coords.h)
    };

    $('#cropbox').Jcrop({
      boxWidth: 770,
      boxHeight: 433,
//      update: function(coords) {
//        $('#user_crop_x').val(coords.x)
//        $('#user_crop_y').val(coords.y)
//        $('#user_crop_w').val(coords.w)
//        $('#user_crop_h').val(coords.h)
//      },
      onSelect: update,
      onChange: update
    });


    'use strict';

    // Initialize the jQuery File Upload widget:
    $('#fileupload').fileupload({
      //previewAsCanvas: false,
      autoUpload: true,
      // done: function (e, data) { 
      //   // console.log(data.result.[0].url);
      //   // console.log(e);
      // },
      uploadTemplate: function (o) {
        var rows = $();
        $.each(o.files, function (index, file) {
          console.log(file);
            var row = $('<li class="span3">' +
                '<div class="thumbnail">' +
                  '<div class="preview" style="text-align: center;"></div>' +
                  '<div class="progress progress-success progress-striped active">' +
                    '<div class="bar" style="width:0%;"></div>' +
                  '</div>' +
//                 '<div class="caption">' +
//                    '<p style="text-align: center;">' +
//                      '<div class="start">' +
//                        '<button class="btn btn-mini">' +
//                          '<i class="icon-upload "></i>' +
//                          '<span>Start</span>' +
//                        '</button>' +
//                      '</div>' +
//                      '<div class="cancel">' +
//                        '<button class="btn btn-mini">' +
//                          '<i class="icon-ban-circle "></i>' +
//                          '<span>Cancel</span>' +
//                        '</button>' +
//                      '</div>' +
//                    '</p>' +
//                  '</div>' +

                '</div>');

//                (file.error ? '<td class="error" colspan="2"></td>' :
//                        '<td><div class="progress">' +
//                            '<div class="bar" style="width:0%;"></div></div></td>' +
//                            '<td class="start"><button>Start</button></td>'
//                ) + '<td class="cancel"><button>Cancel</button></td></tr>');
//            row.find('.name').text(file.name);
//            row.find('.size').text(o.formatFileSize(file.size));
//            if (file.error) {
//                row.find('.error').text(
//                    locale.fileupload.errors[file.error] || file.error
//                );
//            }
            rows = rows.add(row);
        });
        return rows;
    },

    completed: function(e, data) {
      console.log(data.result[0].url);
      $('a[href^="' + data.result[0].url + '"]').slimbox();
    },
    downloadTemplate: function (o) {
        var rows = $();
        $.each(o.files, function (index, file) {
            var row = $('<li class="span3" id="picture_' + file.picture_id + '">' +
                (file.error ? '<div class="name"></div>' +
                    '<div class="size"></div><div class="error" ></div>' :
                      '<div class="thumbnail">' +
                        '<a href="' + file.url +'" rel="lightbox-pictures" class="picture_' + file.id + '" title="<%= pic.description %>">' +
                          '<img src="" alt="">') +
                        '</a>' +
                        '<div class="caption">' +
                          '<p style="text-align: center;">' +
                            '<a href="" class="btn btn-mini btn-show" style="margin-right: 4px;">' +
                              '<i class="icon-edit "></i>' +
                              'Edit' +
                            '</a>' +
                            '<a class="btn btn-mini btn-delete" confirm="Вы уверены?" data-remote=true data-method="delete" href="" >' +
                              '<i class="icon-trash"></i>' +
                              'Delete' +
                            '</a>' +
                          '</p>' +
                        '</div>' +
                      '</div>');




//                        '<td class="preview"></td>' +
//                            '<td class="name"><a></a></td>' +
//                            '<td class="size"></td><td colspan="2"></td>'
//                ) + '<td class="delete"><button>Delete</button> ' +
//                    '<input type="checkbox" name="delete" value="1"></td></tr>');
//            row.find('.size').text(o.formatFileSize(file.size));
            if (file.error) {
                row.find('.name').text(file.name);
                row.find('.error').text(
                    locale.fileupload.errors[file.error] || file.error
                );
            } else {
//                row.find('.name a').text(file.name);
                if (file.thumbnail_url) {
                    row.find('img').prop('src', file.thumbnail_url);
//                    row.find('a').prop('rel', 'gallery');
                }
//                row.find('a').prop('href', file.url);
                row.find('.btn-delete')
                    .attr('href', '/galleries/' + $("#galleryID").val() + '/pictures/' + file.picture_id);
                row.find('.btn-show')
                    .attr('href', '/galleries/' + $("#galleryID").val() + '/pictures/' + file.picture_id + '/edit');
            }            
            rows = rows.add(row);
        });
        return rows;
    }

  });

//<li class="span3">
//          <div class="thumbnail">
//            <img src="<%= picture.image.thumb.url %>" alt="">
//            <div class="caption">
//              <p style="text-align: center;">
//                <a href="#" class="btn btn-mini">
//                  <i class="icon-edit "></i>
//                  Редактировать
//                </a>
//                <a class="btn btn-mini btn-delete" confirm="Вы уверены?" data-method="delete" href="<%= picture_path(:id => picture.id) %>" >
//                  <i class="icon-trash"></i>
//                  Удалить
//                </a>
//              </p>
//            </div>
//          </div>
//        </li>

//<li class="span3">
//          <div class="thumbnail">
//            <img src="<%= picture.image.thumb.url %>" alt="">
//            <div class="caption">
//              <p style="text-align: center;">
//                <a href="#" class="btn btn-mini">
//                  <i class="icon-edit "></i>
//                  Редактировать
//                </a>
//                <a class="btn btn-mini btn-delete" confirm="Вы уверены?" data-method="delete" href="<%= picture_path(:id => picture.id) %>" >
//                  <i class="icon-trash"></i>
//                  Удалить
//                </a>
//              </p>
//            </div>
//          </div>
//        </li>




//    // Enable iframe cross-domain access via redirect option:
//    $('#fileupload').fileupload(
//        'option',
//        'redirect',
//        window.location.href.replace(
//            /\/[^\/]*$/,
//            '/cors/result.html?%s'
//        )
//    );

//    if (window.location.hostname === 'blueimp.github.com') {
//        // Demo settings:
//        $('#fileupload').fileupload('option', {
//            url: '//jquery-file-upload.appspot.com/',
//            maxFileSize: 5000000,
//            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
//            resizeMaxWidth: 1920,
//            resizeMaxHeight: 1200
//        });
//        // Upload server status check for browsers with CORS support:
//        if ($.support.cors) {
//            $.ajax({
//                url: '//jquery-file-upload.appspot.com/',
//                type: 'HEAD'
//            }).fail(function () {
//                $('<span class="alert alert-error"/>')
//                    .text('Upload server currently unavailable - ' +
//                            new Date())
//                    .appendTo('#fileupload');
//            });
//        }
//    } else {
//        // Load existing files:
////        $('#fileupload').each(function () {
////            var that = this;
////            $.getJSON(this.action, function (result) {
////                if (result && result.length) {
////                    $(that).fileupload('option', 'done')
////                        .call(that, null, {result: result});
////                }
////            });
////        });
//    }

});
