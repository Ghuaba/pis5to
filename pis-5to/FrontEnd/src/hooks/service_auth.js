import POST from "./Connection";

export async function authPerson( data ) {
    
  const datos = null;
    
  try {
    
      datos = await POST("login", data);
        
  } catch (error) {
      return error.data;
  }
  
  return datos.data;

}
