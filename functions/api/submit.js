export async function onRequestPost(context) {
  const input = await context.request.formData();

  return new Response(JSON.stringify(input), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
