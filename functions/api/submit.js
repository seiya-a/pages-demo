export async function onRequestPost(context) {
  const MICROCMS_API_KEY = context.env.MICROCMS_API_KEY;
  const SENDGRID_API_KEY = context.env.SENDGRID_API_KEY;

  const input = await context.request.formData();
  const json = JSON.stringify(
    [...input, MICROCMS_API_KEY, SENDGRID_API_KEY],
    null,
    2,
  );

  return new Response(json, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

