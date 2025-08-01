import { databases } from "./config.js";
import { uniqueID } from "./config.js";
import conf from "./conf.js";
const createLocation = async ({lat,lng}) => {
    console.log(lat);
    console.log(lng);
    try {
    const location = await databases.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      uniqueID.unique(),
      {Latitude:lat,
        Longitude:lng}
    );
    return location;
  } catch (error) {
    console.log(error);
  }

};

export default createLocation;
