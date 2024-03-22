import projectBanner from "../assets/projectBanner.svg";
import penIcon from "../assets/Edit.svg";
import category from "../assets/Category.svg";
import imageIcon from "../assets/ImageIc.svg";
import discover from "../assets/Discovery.svg";

export default function Projects() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[60%] h-[1725px] py-20 flex flex-col justify-around">
        <h3 className="text-base font-bold title-second-line relative uppercase">
          Our project
        </h3>
        <h2 className="font-bold text-[56px] text-[#1D2130] w-[832px]">
          Weekly cleanliness program in city
        </h2>
        <p className="text-[#525560] font-normal text-base w-[832px] leading-[25.6px]">
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
          in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
          tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
          accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in
          viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
          vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum
          amet, nisi eu id.
        </p>
        <span>
          <p className="text-[#525560] font-normal text-base w-[832px] leading-[25.6px]">
            Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus
            sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras
            volutpat dui. A bibendum viverra eu cras.
          </p>
          <p className="text-[#525560] font-normal text-base w-[832px] leading-[25.6px]">
            Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis
            elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor
            ornare tristique. Integer faucibus duis praesent tempor feugiat
            ornare in. Erat libero egestas porttitor nunc pellentesque mauris et
            pulvinar eget.
          </p>
        </span>
        <p className="text-[#525560] font-normal text-base w-[832px] leading-[25.6px]">
          Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus
          libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et
          consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl
          pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu
          rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel
          nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus
          pellentesque risus duis est.
        </p>
        <img src={projectBanner} alt="" />
        <h2 className="font-bold text-[56px] text-[#1D2130] w-[832px]">
          Some cool heading
        </h2>
        <p className="text-[#525560] font-normal text-base w-[832px] leading-[25.6px]">
          Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at
          sit convallis blandit blandit in. Maecenas odio orci lectus urna ante
          consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper
          sit tellus adipiscing. Est sapien rhoncus sit vestibulum sollicitudin.
          Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum
          felis interdum pharetra. Diam fermentum in lectus morbi at eget sit et
          quisque. Semper commodo viverra donec magna egestas nibh. Condimentum
          pellentesque auctor ornare at at tellus nunc cras eu. Velit dignissim
          penatibus faucibus tempus. Arcu pharetra morbi bibendum et dolor
          volutpat amet. Sed mauris amet mi sed purus vitae odio. Mi eu lectus
          suscipit sagittis, ultrices ut dui.
        </p>
        <ul className="list-disc text-[#1D2130] font-bold text-base pl-4">
          <li>Posuere sed pulvinar enim faucibus justo, cursus. </li>
          <li>In diam facilisi at sit convallis blandit blandit in.</li>
          <li>Maecenas odio orci lectus urna ante consequat erat non morbi.</li>
        </ul>
        <p className="text-[#525560] font-normal text-base w-[832px] leading-[25.6px]">
          Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at
          sit convallis blandit blandit in. Maecenas odio orci lectus urna ante
          consequat erat non morbi.
        </p>
      </div>
      <div className="bg-[#EBF0F9] w-full h-[450px] flex justify-center items-center">
        <div className="w-[80%] h-[70%] flex flex-wrap justify-around items-center">
          <div className="w-[500px] h-36 flex items-start justify-around   ">
            <img src={penIcon} alt="" className="w-8" />
            <span>
              <h3 className="text-[#1D2130] font-bold text-2xl">
                200+ Plantation in 1 week
              </h3>
              <p className="text-[#525560] font-normal text-base w-[436px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </span>
          </div>
          <div className="w-[500px] h-36 flex items-start justify-around   ">
            <img src={category} alt="" className="w-8" />
            <span>
              <h3 className="text-[#1D2130] font-bold text-2xl">
                230 People Have donated
              </h3>
              <p className="text-[#525560] font-normal text-base w-[436px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </span>
          </div>
          <div className="w-[500px] h-36 flex items-start justify-around   ">
            <img src={imageIcon} alt="" className="w-8" />
            <span>
              <h3 className="text-[#1D2130] font-bold text-2xl">
                30+ people joined{" "}
              </h3>
              <p className="text-[#525560] font-normal text-base w-[436px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </span>
          </div>
          <div className="w-[500px] h-36 flex items-start justify-around   ">
            <img src={discover} alt="" className="w-8" />
            <span>
              <h3 className="text-[#1D2130] font-bold text-2xl">
                $324 Raised for this initiate
              </h3>
              <p className="text-[#525560] font-normal text-base w-[436px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-around items-center h-[600px]">
        <div className="bg-tree bg-standart bg-no-repeat w-[415px] h-[415px] overflow-hidden rounded-xl ">
          <div className="w-full h-full bg-[#00000075] flex flex-col gap-4 px-[15%] pt-[15%]">
            <h3 className="text-white text-[28px] font-bold w-[315px]">
              Mission 40K: Tree plantation
            </h3>
            <p className="text-white font-normal text-base w-[315px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <button className="w-[132px] hover:bg-transparent hover:text-white h-[51px] rounded bg-white border-2 border-white transition-all mt-[15%]">
              See more
            </button>
          </div>
        </div>
        <div className="bg-city bg-standart bg-no-repeat w-[415px] h-[415px] overflow-hidden rounded-xl">
          <div className="w-full h-full bg-[#00000075] flex flex-col gap-4 px-[15%] pt-[15%]">
            <h3 className="text-white text-[28px] font-bold w-[315px]">
              Weekly cleanliness program in city
            </h3>
            <p className="text-white font-normal text-base w-[315px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <button className="w-[132px] hover:bg-transparent hover:text-white h-[51px] rounded bg-white border-2 border-white transition-all mt-[15%]">
              See more
            </button>
          </div>
        </div>
        <div className="bg-wildlife bg-standart bg-no-repeat w-[415px] h-[415px] overflow-hidden rounded-xl">
          <div className="w-full h-full bg-[#00000075] flex flex-col gap-4 px-[15%] pt-[15%]">
            <h3 className="text-white text-[28px] font-bold w-[315px]">
              Wildlife safety program 2021
            </h3>
            <p className="text-white font-normal text-base w-[315px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <button className="w-[132px] hover:bg-transparent hover:text-white h-[51px] rounded bg-white border-2 border-white transition-all mt-[15%]">
              See more
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[700px] py-4 flex items-center justify-center">
        <div className="w-[85%] h-[55%] overflow-hidden bg-donate bg-standart rounded-xl">
          <div className="w-full h-full bg-[#0000007b] flex flex-col items-center justify-center gap-16">
            <h2 className="text-white w-[631px] text-center font-bold text-5xl">
              You can contribute to make the environment greener!
            </h2>
            <span className="flex gap-6">
              <button className="w-[200px] h-[51px] rounded transition-all bg-[#70C174] hover:bg-[#33a639] text-white text-base font-medium">
                Join as a volunteer
              </button>
              <button className="w-[116px] h-[51px] rounded transition-all bg-[#fff] hover:bg-[#33a639] text-black hover:text-white text-base font-medium">
                Donate
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
