import { Tabs } from "antd";
import { WeldingTrainingCourses_1content_1 } from "../ProductionContents/WeldingTrainingCourses_1content_1";
import { WeldingTrainingCourses_1content_2 } from "../ProductionContents/WeldingTrainingCourses_1content_2";
import { WeldingTrainingCourses_1content_3 } from "../ProductionContents/WeldingTrainingCourses_1content_3";
import { WeldingTrainingCourses_1content_top } from "./ProductionContentsTop/WeldingTrainingCourses_1_top";


const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `MIG MAG-Seviye 1`,
    children: <WeldingTrainingCourses_1content_1 />,
  },
  {
    key: "2",
    label: `MIG MAG-Seviye 2`,
    children: <WeldingTrainingCourses_1content_2 />,
  },
  {
    key: "3",
    label: `MIG MAG-Seviye 3`,
    children: <WeldingTrainingCourses_1content_3 />,
  },
];
export const WeldingTrainingCourses_1 = () => (
  <div>
    <WeldingTrainingCourses_1content_top/>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tabs
        className="CoursesTab"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        style={{
          marginTop: "20px",
          width: "85%",
        }}
      />
    </div>
  </div>
);
