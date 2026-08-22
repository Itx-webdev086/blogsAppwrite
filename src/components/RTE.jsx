import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="mb-1 pl-1">{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
          apiKey="dda8m32tpe2ktxe0nr5hngia95a8p3o91uwg76qmrmbokjps"
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 400,
              menubar: true,
              
              toolbar:
                "undo redo | blocks | bold italic underline strikethrough | link table | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat ",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
