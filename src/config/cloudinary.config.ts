// Cloudinary configuration for file uploads
export const cloudinaryConfig = {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'db8sohf5k',
    uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'client_form_uploads',
};

// Upload URL for unsigned uploads
export const getCloudinaryUploadUrl = () => {
    return `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/upload`;
};
