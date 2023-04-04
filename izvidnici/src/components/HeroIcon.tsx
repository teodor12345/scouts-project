import { IconName } from '@heroicons/react/24/solid'
import { ChevronLeftSolid, ChevronRightSolid } from "@heroicons/react/24/solid";


interface HeroIconProps {
    name: IconName
    className?: string
  }
  
  export const HeroIcon: React.FC<HeroIconProps> = ({ name, className }) => {
    const Icon = require(`@heroicons/react/24/solid/${name}`).default
    return <Icon className={className} />
  }
  

function MyComponent() {
  return (
    <div>
      <ChevronLeftSolid className="h-5 w-5 text-gray-500" />
      <ChevronRightSolid className="h-5 w-5 text-gray-500" />
    </div>
  );
}