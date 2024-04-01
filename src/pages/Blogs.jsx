import blogBanner from "../assets/blogBanner.svg"

export default function Blogs() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[90%] h-[450px] flex flex-col items-center justify-center relative">
        <p className="font-medium text-base text-[#1D2130] absolute top-0 pt-8">21 DEC 2021</p>
        <h1 className="text-center font-bold text-6xl w-[1024px]"> Is climate change happening faster than expected?</h1>
        <p className="font-normal text-base text-[#525560] mt-7">Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit.</p>
      </div>
      <img src={blogBanner} alt="" />
      <div className="w-[60%] h-[1225px] py-20 flex flex-col justify-around">
        <h2 className="text-5xl font-bold text-[#1D2130]">Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque</h2>
        <p className="text-[#525560] font-normal text-base w-[832px] leading-[25.6px]">Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>
        <p className="text-[#525560] font-normal text-base w-[832px] leading-[25.6px]">
          Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras. <br />
          Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.
        </p>
        <p className="text-[#525560] font-normal text-base w-[832px] leading-[25.6px]">
          Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.
        </p>
        <h3 className="font-bold text-[28px] text-[#232536]">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h3>
        <ul className="text-[#525560] font-normal text-base w-[832px] leading-[25.6px] list-disc pl-5 flex flex-col gap-3">
          <li>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis.</li>
          <li>Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.</li>
          <li>Mauris morbi sed dignissim a in nec aliquam fringilla et. </li>
          <li>Consectetur feugiat quis hac enim nullam in enim.</li>
        </ul>
        <h3 className="font-bold text-[28px] text-[#232536]">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h3>
        <p className="text-[#525560] font-normal text-base w-[832px] leading-[25.6px]">
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
        </p>
        <p className="text-[#525560] font-normal text-base w-[832px] leading-[25.6px]">
          Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.
        </p>
      </div>
    </div>
  )
}
