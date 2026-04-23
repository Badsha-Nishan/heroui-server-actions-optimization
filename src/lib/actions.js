export async function createATask (formData) {
    "use server"
    const title = formData.get("name");
    console.log(formData)
}