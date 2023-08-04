import React, { useState } from "react";

const MainPage = () => {
  const url = "https://medbotics.onrender.com/upload";
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // TODO: Validate file type and size if needed.
      setSelectedImage(file);
    }
  };

  const handleImageUpload = async () => {
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }
    console.log("foi");
    try {
      // Prepare the image data as FormData to send to the server
      const formData = new FormData();
      formData.append("image", selectedImage);

      // Send the image to the server using the fetch API
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      console.log(response);

      // Handle the server response (if needed)
      if (response.ok) {
        // Image successfully uploaded
        alert("Image uploaded successfully!");
      } else {
        // Handle the error response from the server
        alert("Failed to upload image. Please try again later.");
      }
    } catch (error) {
      // Handle any network errors or exceptions
      alert(
        "An error occurred while uploading the image. Please try again later."
      );
    }
  };

  return (
    <div className="flex justify-center items-center flex-col gap-5 h-[calc(100vh-150px)]">
      <div className="mb-5 text-center flex flex-col gap-5">
        <h1 className="text-2xl  text-gray-700">Análise de Imagem</h1>
        <p className="text-gray-600">
          Faça upload de uma foto para ter seu diagnóstico com base em nossos
          algorítmos de{" "}
          <span className="text-cyan-500">Inteligência Artificial</span>
        </p>
      </div>

      <div className="flex items-center justify-center w-[80%]">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              {/* SVG path here */}
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Faça upload da imagem</span> or
              drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>
      <button
        className="bg-[#367198] hover:bg-[#285a7b] text-white font-bold py-2 px-4 rounded w-[80%]"
        onClick={handleImageUpload}
      >
        Enviar
      </button>
    </div>
  );
};

export default MainPage;
