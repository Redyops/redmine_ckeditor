/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
    // Define changes to default configuration here. For example:
    // config.language = 'fr';
    // config.uiColor = '#AADC6E';
    config.extraPlugins = 'scayt';
    config.scayt_autoStartup = true;
    config.extraPlugins = 'imagecrop';
    config.allowedContent = true;
    config.toolbar = "Custom";
    config.toolbar_Custom = [{'name': 'insert', 'items': ['ImageCrop']}];

    // Setup file browser urls (See CKEditor documentation http://docs.ckeditor.com/#!/guide/dev_file_browser_api)
    config.filebrowserBrowseUrl = '/rich/files/';
    config.filebrowserUploadUrl = '/rich/files/';

    // Setup cropper options. (See cropper.js documentation https://github.com/fengyuanchen/cropperjs)
    config.cropperOption = {
        "aspectRatio": 1.8,
        "autoCropArea": 1,
        "background": false,
        "cropBoxResizable": false,
        "dragMode": "move"
    };

    // Add js and css urls to cropper.js
    config.cropperJsUrl = "https://cdnjs.cloudflare.com/ajax/libs/cropperjs/0.8.1/cropper.min.js";
    config.cropperCssUrl = "https://cdnjs.cloudflare.com/ajax/libs/cropperjs/0.8.1/cropper.min.css"
};
