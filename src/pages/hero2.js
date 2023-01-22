import infoArea from "./dep/infoareaicontitlelistcolor";

const textProps = {
  heading2badge: {
    badge: {
      color: "lightBlue",
      children: "with burned soles",
    },
    title: "You need to fight like David with Goliath",
    description:
      "piensa globalmente y actua localmente. Software hecho por desarrolladores y pensando para las personas. Optimizado para el cloud y adaptado a las últimas novedades. Movilidad, web, todas nuestras soluciones están adaptadas a todos los dispositivos",
  },
  image:
    "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  infoArea: {
    ...infoArea,
  },
};
export default textProps;
