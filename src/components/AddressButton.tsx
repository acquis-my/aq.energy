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
      className="items-left group flex flex-col gap-2 rounded-md border p-4 text-black-coral transition ease-in-out hover:bg-indigo-dye hover:text-white"
    >
      <div className="flex items-center gap-3">
        <Icon className="transition group-hover:bg-indigo-dye">
          <MapPinIcon className="h-6 w-6 transition group-hover:fill-cyber-yellow" />
        </Icon>
        <span className="font-semibold">{name}</span>
      </div>
      <span>{address}</span>
    </a>
  );
};
