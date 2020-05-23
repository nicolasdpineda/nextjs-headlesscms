import React, { useState, useEffect, useRef } from 'react';

export default function MyEditor() {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
      // WordCount: require('@ckeditor/ckeditor5-word-count/src/wordcount'),
    };
    setEditorLoaded(true);
  }, []);

  return editorLoaded ? (
    <>
      <CKEditor
        editor={ClassicEditor}
        data=''
        config={{
          // plugins: [WordCount],

          wordCount: {
            onUpdate: (stats) => {
              // Prints the current content statistics.
              console.log(
                `Characters: ${stats.characters}\nWords: ${stats.words}`
              );
            },
          },
          toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'indent',
            'outdent',
            '|',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'undo',
            'redo',
          ],
        }}
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </>
  ) : (
    <div>Editor loading...</div>
  );
}
