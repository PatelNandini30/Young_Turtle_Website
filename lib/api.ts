export const submitContactForm = async (data: any) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  // Log to console as "backend"
  console.log("-----------------------------------");
  console.log("API CALL: /api/contact");
  console.log("PAYLOAD:", JSON.stringify(data, null, 2));
  console.log("-----------------------------------");
  
  return { success: true, message: "Message sent successfully!" };
};

export const submitApplication = async (data: any) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  console.log("-----------------------------------");
  console.log("API CALL: /api/apply");
  console.log("PAYLOAD:", JSON.stringify(data, null, 2));
  console.log("-----------------------------------");
  
  return { success: true, message: "Application submitted successfully!" };
};