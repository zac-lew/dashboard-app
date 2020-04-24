import moment from "moment";

export const convertActivityData = (activityData) => {
  const distances = [
    { day: "Monday", distance: 0 },
    { day: "Tuesday", distance: 0 },
    { day: "Wednesday", distance: 0 },
    { day: "Thursday", distance: 0 },
    { day: "Friday", distance: 0 },
    { day: "Saturday", distance: 0 },
    { day: "Sunday", distance: 0 },
  ];
  activityData &&
    activityData.forEach((activity) => {
      const activityDay = moment(activity.start_date).format("d") - 1;
      if (activity.type === "Run")
        distances[activityDay].distance = Math.round(distances[activityDay].distance + activity.distance / 1000);
    });
  return distances;
};
