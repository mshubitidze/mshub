import crypto from "crypto";

async function verifySignature(req: Request) {
  if (!process.env.WEBHOOK_SECRET) {
    throw new Error("Missing WEBHOOK_SECRET");
  }

  const payload = await req.text();
  const signature = crypto
    .createHmac("sha1", process.env.WEBHOOK_SECRET)
    .update(payload)
    .digest("hex");
  return signature === req.headers.get("x-vercel-signature");
}

export async function POST(request: Request) {
  try {
    const verified = await verifySignature(request);

    if (!process.env.VERCEL_TOKEN) {
      throw new Error("Missing VERCEL_TOKEN");
    }

    if (!verified) {
      return new Response("Invalid signature", { status: 401 });
    }

    const projectIds = [
      "prj_6EN63pparxRwdeCjHA4t96a1Inp4",
      "prj_ZkmU3IrP3ShS74SNebGSm5wwj510",
      "prj_b87hKeX8tMRiPOj2oyvPpk2TOqtW",
    ];
    const teamId = "team_rfw7EsBTNmmBeJQtxc4LDAtv";

    const promises = projectIds.map((projectId) => {
      const route = `${projectId}/pause?teamId=${teamId}`;

      return fetch(`https://api.vercel.com/v1/projects/${route}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
    });

    await Promise.all(promises);
  } catch (err) {
    console.error(err);
  }
}
