import cardImage from "@/img/cardImage.jpg"
import flowers from "@/img/flowers.jpg"
import route from "@/img/route.jpg"

const landscapesDetails = {
    'mountains': {
        imageSrc:cardImage,
        imageAlt:"Sunset in the mountains",
        title:"The Coldest Sunset",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        tags:['photography', 'travel', 'winter']
    },
    'flowers': {
        imageSrc: flowers,
        imageAlt: 'Pink flowers', 
        title: 'Beautiful Flowers', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', 
        tags: ['photography', 'travel', 'flowers']
    },
    'route': {
        imageSrc: route,
        imageAlt: 'Route',
        title: 'Scenic Route',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        tags: ['photography', 'travel', 'route']
    }
}

export default landscapesDetails