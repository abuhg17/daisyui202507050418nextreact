import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>This is Home Page.</h1>
      <p>
        <a
          href="https://daisyui202507050418nextreact.vercel.app"
          className="btn btn-ghost text-xl"
        >
          vercel 20250705 0418
        </a>
        <Image src="/qr3vercel.png" width={100} height={200} alt="qr3vercel" />
      </p>

      <h5>
        <a
          href="https://daisyui202507050418nextreact.netlify.app/"
          className="btn btn-ghost text-xl"
        >
          netlify 20250705 0418
        </a>
        <Image
          src="/qr3netlify.png"
          width={100}
          height={200}
          alt="qr3netlify"
        />
      </h5>
      <h3>
        <a
          href="https://daisyui202507050418nextreact.onrender.com"
          className="btn btn-ghost text-xl"
        >
          render 20250705 0418
        </a>
        <Image src="/qr3render.png" width={100} height={200} alt="qr3render" />
      </h3>
      <h1>API Test:</h1>
      <h3>
        <a href="/api/hello" className="btn btn-ghost text-xl">
          api hello
        </a>
      </h3>
      <h3>
        <a href="/api/countdown/1111" className="btn btn-ghost text-xl">
          countdown 1111
        </a>
      </h3>
      <h3>
        <a href="/api/countdown/202507050418" className="btn btn-ghost text-xl">
          countdown 202507050418
        </a>
      </h3>
      <h3>
        <a href="/api/bilibili/BV1BELHzyEMi" className="btn btn-ghost text-xl">
          bilibili BV1B~
        </a>
      </h3>
      <h3>
        <a href="/api/bilibili/BV1Et4y1r7Eu" className="btn btn-ghost text-xl">
          bilibili BV1E~
        </a>
      </h3>
      <h3>
        <a href="/api/bilibili/1111" className="btn btn-ghost text-xl">
          bilibili 1111
        </a>
      </h3>
      <h3>
        <a
          href="/api/bilibili/proxyimg?url=http://i1.hdslb.com/bfs/archive/b168c77ff9d280b3d9f7f8a134ddc9df9c953ec9.jpg"
          className="btn btn-ghost text-xl"
        >
          bilibili proxyimg
        </a>
      </h3>
      <h3>
        <a href="/api/firebasefood" className="btn btn-ghost text-xl">
          firebasefood
        </a>
      </h3>
      <h3>
        <a
          href="/api/youtube/videos/WS3sGVgkOZk"
          className="btn btn-ghost text-xl"
        >
          youtube WS3s~
        </a>
      </h3>
      <h3>
        <a
          href="/api/youtube/channel/UCTwKpp4T5n1wyxLVf-cD4ew"
          className="btn btn-ghost text-xl"
        >
          youtube channel UCTw~
        </a>
      </h3>
      <h3>
        <a
          href="/api/youtube/videos/-4ADGW7TE0Q"
          className="btn btn-ghost text-xl"
        >
          youtube -4AD~
        </a>
      </h3>
      <h3>
        <a
          href="/api/youtube/channel/UCRykoXOF-1jb0DS4P34NG6Q"
          className="btn btn-ghost text-xl"
        >
          youtube channel UCRy~
        </a>
      </h3>
    </div>
  );
}
