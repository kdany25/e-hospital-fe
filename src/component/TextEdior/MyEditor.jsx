import React from "react";
import { Editor } from "@tinymce/tinymce-react";

function MyEditor() {
	const handleEditorChange = (content, editor) => {
		console.log("Content was updated:", content);
	};

	return (
		<Editor
			apiKey="edqediiu06b35lfua2e3m1l7dcs0b6qs4x41ixzenbmbto3j"
			initialValue="<p>Type consultation here</p>"
			init={{
				height: 250,
				plugins:
					"advlist autolink lists link image charmap print preview",
				toolbar:
					"bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | link image",
				menubar: false,
				content_css: "./custom.css",
			}}
			onEditorChange={handleEditorChange}
		/>
	);
}

export default MyEditor;
