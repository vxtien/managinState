import { useState } from "react";
import { initialTravelPlan } from "./data-places"
import PlaceTree from "./PlaceTree";
const TravelPlan = () => {
    const [plan, setplan] = useState(initialTravelPlan);
    const handleComplete = (parentId, childId) => {
        const parent = plan[parentId];
        const nextParent = {
            ...parent,
            childIds: parent.childIds.filter(id => id !== childId)
        };
        setplan({
            ...plan,
            [parentId]: nextParent,
        });
    }
    const root = plan[0];
    const planetIds = root.childIds;
    return(
        <>
            <h2>Places to visit</h2>
            <ol>
                {planetIds.map(id => (
                    <PlaceTree
                        key={id}
                        id={id}
                        parentId={0}
                        placesById={plan}
                        onComplete={handleComplete}
                    />
                ))}
            </ol>
        </>
    )
}
export default TravelPlan;

