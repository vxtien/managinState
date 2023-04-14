import TravelPlan from "./managinState/travelPlan/TravelPlan";
import Shophouse from "./managinState/shophouse/Shophouse";
import Accordion from "./managinState/Accordion";
import FilterableList from "./managinState/searchBar/FilterableList";
import TaskApp from "./managinState/taskApp/TaskApp";
import ExampleUseContext from "./managinState/useContext/ExampleUseContext";
import ContextComponent from "./managinState/Ex";
import Menu from "./managinState/Menu";
import EditProfile from "./managinState/EditProfile"

export const data = [
    {
        link: '/accordion',
        title: 'Accordion',
        component: <Accordion/>
    },
    {
        link: '/edit-profile',
        title: 'EditProfile',
        component: <EditProfile/>
    },
    {
        link: '/ex',
        title: 'ExampleUseContext2',
        component: <ExampleUseContext/>
    },
    {
        link: '/menu',
        title: 'Menu',
        component: <Menu/>
    },
    {
        link: '/filterable-list',
        title: 'FilterableList',
        component: <FilterableList/>
    },
    {
        link: '/shophouse',
        title: 'Shophouse',
        component: <Shophouse/>
    },
    {
        link: '/task-app',
        title: 'TaskApp',
        component: <TaskApp/>
    },
    {
        link: '/travel-plan',
        title: 'TravelPlan',
        component: <TravelPlan/>
    },
    {
        link: '/example-use-context',
        title: 'ExampleUseContext1',
        component: <ContextComponent/>
    },
]