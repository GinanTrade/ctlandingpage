import { featuresEnum, lotNumberEnum } from "@/constant/Enums";
import { IArticle, IArticleContent, IParagraph } from "@/models/Article";
import { IContactUs } from "@/models/Contact";

export const displayThousands = (number: number) => {
  var numberString = number.toString();

  var parts = numberString.split(".");

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join(".");
};

export const matchDurationEnum = (duration: number) => {
  if (duration === 1) {
    return featuresEnum.OneHourStay;
  } else if (duration === 3) {
    return featuresEnum.ThreeHourStay;
  } else if (duration === 6) {
    return featuresEnum.SixHourStay;
  } else if (duration === 12) {
    return featuresEnum.TwelveHourStay;
  } else {
    return "";
  }
};

export const getLotNumber = (name: string) => {
  const lotNumber =
    name === "Airside"
      ? lotNumberEnum.airside
      : name === "Landside"
      ? lotNumberEnum.landside
      : name === "Sleep Lounge"
      ? lotNumberEnum.sleepLounge
      : name === "MAX"
      ? lotNumberEnum.max
      : 0;

  return lotNumber;
};

export const predictBedType = (maxPax: string) => {
  const maxPaxNumber = parseInt(maxPax);

  if (maxPaxNumber === 1) {
    return "Single";
  } else if (maxPaxNumber === 2) {
    return "Queen";
  } else if (maxPaxNumber === 3) {
    return "Queen + Single";
  } else {
    return "Unknown";
  }
};

export const handleConvertArticle = (
  data: any,
  detailed: boolean
): IArticle => {
  const content = data.attributes.Content.map((content: any) =>
    content.content.map((detailedContent: any): IArticleContent => {
      if (detailedContent.type === "image") {
        return {
          type: detailedContent.type,
          imageUrl: detailedContent.image.url,
        };
      } else {
        return {
          type: detailedContent.type,
          level: detailedContent.level,
          paragraph: detailedContent.children.map(
            (texts: any): IParagraph => ({
              text: texts.text,
              bold: texts.bold,
            })
          ),
        };
      }
    })
  );

  const convertedArticle: IArticle = {
    id: data.id,
    title: data.attributes.title,
    createdAt: data.attributes.createdAt,
    updatedAt: data.attributes.updatedAt,
    thumbnailUrl: detailed
      ? `${process.env.NEXT_PUBLIC_STRAPI_BASE}/uploads${data.attributes.thumbnail.data.attributes.url}`
      : `${process.env.NEXT_PUBLIC_STRAPI_BASE}${data.attributes.thumbnail.data.attributes.url}`,
    content: content,
  };

  return convertedArticle;
};

export const variantCheck = (value: string) => {
  switch (value) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    default:
      "body1";
  }
};

export const handleConvertContactUs = (data: any) => {
  const formattedData: IContactUs = {
    name: data.attributes.name,
    email: data.attributes.email,
    icon: `${process.env.NEXT_PUBLIC_STRAPI_BASE}${data.attributes.icon.data.attributes.url}`,

    terminal: data.attributes.terminal,
    phone: data.attributes.phone,
    address: data.attributes.address,
  };
  return formattedData;
};
