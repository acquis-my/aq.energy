import { MapPinIcon } from "@heroicons/react/24/solid";
import Icon from "./Icon";

export const AddressButton = ({
  name,
  mapLink,
  address,
}: {
  name: string;
  mapLink: string;
  address: string;
}) => {
  return (
    <a
      href={mapLink}
      className="items-left flex flex-col gap-2 rounded-md border p-4 text-black-coral hover:bg-indigo-dye hover:text-white"
    >
      <div className="flex items-center gap-3">
        <Icon>
          <MapPinIcon className="h-6 w-6" />
        </Icon>
        <span className="font-semibold">{name}</span>
      </div>
      <span>{address}</span>
    </a>
  );
};
