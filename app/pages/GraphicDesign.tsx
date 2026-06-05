import Masonry from "@/components/Masonry";
import { useInView } from "react-intersection-observer";

const items = [
  {
    id: "1",
    img: "",
    url: "",
    height: 400,
  },
  {
    id: "2",
    img: "",
    url: "",
    height: 400,
  },
  {
    id: "3",
    img: "",
    url: "",
    height: 400,
  },
  {
    id: "4",
    img: "",
    url: "",
    height: 400,
  },
  {
    id: "5",
    img: "",
    url: "",
    height: 400,
  },
  {
    id: "6",
    img: "",
    url: "",
    height: 400,
  },
  {
    id: "7",
    img: "",
    url: "",
    height: 400,
  },
  {
    id: "8",
    img: "",
    url: "",
    height: 400,
  },
  {
    id: "9",
    img: "",
    url: "",
    height: 400,
  },
  {
    id: "11",
    img: "",
    url: "",
    height: 400,
  },
];

function GraphicDesign() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div ref={ref} className="min-h-10 w-2/4 h-auto">
      {inView && (
        <Masonry
          columns={3}
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="random"
          scaleOnHover
          hoverScale={0.95}
          blurToFocus
          colorShiftOnHover
        />
      )}
    </div>
  );
}
export default GraphicDesign;
