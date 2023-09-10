const breakfast = { time: "7:00 a.m", name: "breakfast" };
const lunch = { time: "12:00 p.m", name: "lunch" };
const dinner = { time: "7:00 p.m", name: "dinner" };

function nextMeal(timeNow) {
  const mealTimes = [breakfast, lunch, dinner];
  const a = parseTime(timeNow);

  let nextMeal = -1;
  for (let i = 0; i < mealTimes.length; i++) {
    const mealTimeAsli = parseTime(mealTimes[i].time);
    if (compareTimes(a, mealTimeAsli) < 0) {
      nextMeal = i;
      break;
    }
  }

  if (nextMeal === -1) {
    console.log("You've already had dinner!");
  } else {
    const nextMealTime = parseTime(mealTimes[nextMeal].time);
    const timeUntilNextMeal = timeDifference(a, nextMealTime);
    const mealName = mealTimes[nextMeal].name;

    console.log(
      `${timeUntilNextMeal.hours} hours and ${timeUntilNextMeal.minutes} minutes until next meal, ${mealName}`
    );

    const nextMealTimeMs = calculateTimeMs(timeUntilNextMeal);
    setTimeout(() => {
      console.log(`It's ${mealName} time!`);
    }, nextMealTimeMs);
  }
}

function parseTime(timeStr) {
  const [time, period] = timeStr.split(" ");
  const [hours, minutes] = time.split(":").map(Number);
  return { hours, minutes, period };
}

function compareTimes(time1, time2) {
  if (time1.period !== time2.period) {
    return time1.period === "a.m" ? -1 : 1;
  }

  if (time1.hours !== time2.hours) {
    return time1.hours - time2.hours;
  }

  return time1.minutes - time2.minutes;
}

function timeDifference(time1, time2) {
  let hours = time2.hours - time1.hours;
  let minutes = time2.minutes - time1.minutes;

  if (minutes < 0) {
    hours -= 1;
    minutes += 60;
  }

  if (hours < 0) {
    hours += 12;
  }

  return { hours, minutes };
}

function calculateTimeMs(time) {
  return time.hours * 60 * 60 * 1000 + time.minutes * 60 * 1000;
}

nextMeal("5:50 a.m");
nextMeal("2:00 p.m");
nextMeal("12:00 p.m");
