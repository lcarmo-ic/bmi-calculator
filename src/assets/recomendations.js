const recomendations = {
    Underweight: [
    {subtitle: "What is the BMI?", 
    text:`The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. The BMI calculation divides an adult's weight in kilograms by their height in metres squared. For example, A BMI of 25 means 25kg/m2.`},
    {subtitle: "What does my BMI say about me?",
    text: `For most adults, an ideal BMI is in the 18.5 to 24.9 range.

    For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.
    
    If your BMI is:
    
    below 18.5 – you're in the underweight range
    between 18.5 and 24.9 – you're in the healthy weight range
    between 25 and 29.9 – you're in the overweight range
    between 30 and 39.9 – you're in the obese range`},
    {subtitle: "How to prevent being overweight?",
    text:`Many of these obesity prevention tips are the same for losing or maintaining a healthy weight. The bottom is line that eating a healthy diet and getting more physical activity can help prevent obesity.`},
    {subtitle: 'Consume less “bad” fat and more "good" fat',
    text: `Contrary to the belief behind the low-fat diet craze of the ’90s, not all fat is bad. ATrusted Source 2017 studyTrusted Source published in the Nutrition Journal showed that intake of healthy dietary fats, such as polyunsaturated fats, can improve cholesterol levels and reduce obesity risk.`},
    
    {subtitle: "Consume less processed and sugary foods",
    text: `According to a 2016 studyTrusted Source published in The American Journal of Clinical Nutrition,consumption of processed and ultra-processed foods is linked to a higher risk of obesity. Many processed foods are high in fat, salt, and sugar, which can encourage overeating.`},
    
    {subtitle: "Eat more servings of vegetables and fruits" ,
    text: `The daily recommendation for fruit and vegetable intake is five to nine servings per day for adults. Filling your plate with veggies and fruit can help keep calories reasonable and reduce the risk of overeating.`},
    
    {subtitle: "Eat plenty of dietary fiber",
        text: `Studies continue to show that dietary fiber plays a role in weight maintenance. One 2012 trialTrusted Source found that people who took a fiber complex supplement three times daily for 12 weeks lost up to 5 percent of their body weight.`},
    
    {subtitle: "Focus on eating low–glycemic index foods",
        text: `The glycemic index (GI) is a scale used to measure how quickly a food item will raise your blood sugar. Focusing on low-GI foods can help keep blood sugar levels steadier. Keeping your blood glucose levels steady can help with weight management.`},
    
    {subtitle: "Get the family involved in your journey",
        text: `Social support isn’t just for children and teens — it’s important for adults to feel supported too. Whether cooking with family or going on walks with friends, getting people involved can help to encourage a healthy lifestyle.`},
    
    {subtitle: "Engage in regular aerobic activity",
        text: `Incorporating regular physical activity into your schedule is important for maintaining or losing weight, among other benefits. The CDCTrusted Source recommends 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity per week.`},
    
    {subtitle: "Incorporate a weight training regimen",
        text: `Weight training is just as important to weight maintenance as aerobic activity. In addition to weekly aerobic activity, the WHO recommends weight training that involves all your major muscles at least two times per week.`},
    
    {subtitle: "Focus on reducing daily stress",
        text: `Stress can have many effects on the body and mind. A 2012 studyTrusted Source suggests that stress may trigger a brain response that changes eating patterns and leads to cravings for high-calorie foods. Eating too many high-calorie foods can contribute to the development of obesity.`},
    
    {subtitle: "Learn how to food budget and meal prep",
        text: `It’s much easier to grocery shop for healthy foods when you have a plan. Creating a food budget and list for your shopping trips can help avoid temptations for unhealthy foods. In addition, prepping meals can allow you to have ready-to-go healthy meals.`},
    ],
    Healthy: [
    {subtitle: `Your healthy nothing to worry about!`,
    text: "Your weight is under the healthy BMI spectrum. You don't have to do anything extra to fix your BMI"},
    {subtitle: `Exercising is still good for you!`,
    text: "Despite not having to do anything to stay healthy, you can always be healthier and what better to keep yourself healthy than exercising. Exercising is good for all BMI levels including the underweight category! They should be eating a lot more though. "},
    {subtitle: "You still should know what you're eating!",
    text: "Ok, you're healthy. So you don't have to worry about what you eat right? No."},
    {subtitle: "",
    text: "Just because you don't have to control your calories does not mean you should be eating whatever. Eating is pretty intuitive, so as a general rule, stick to your greens and unprocessed foods and you will be getting healthier by the day."}
    ],
    Overweight: [
    {subtitle: "What is the BMI?", 
    text:`The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. The BMI calculation divides an adult's weight in kilograms by their height in metres squared. For example, A BMI of 25 means 25kg/m2.`},
    {subtitle: "What does my BMI say about me?",
    text: `For most adults, an ideal BMI is in the 18.5 to 24.9 range.

    For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.
    
    If your BMI is:
    
    below 18.5 – you're in the underweight range
    between 18.5 and 24.9 – you're in the healthy weight range
    between 25 and 29.9 – you're in the overweight range
    between 30 and 39.9 – you're in the obese range`},
    {subtitle: "How to prevent being overweight?",
    text:`Many of these obesity prevention tips are the same for losing or maintaining a healthy weight. The bottom is line that eating a healthy diet and getting more physical activity can help prevent obesity.`},
    {subtitle: 'Consume less “bad” fat and more "good" fat',
    text: `Contrary to the belief behind the low-fat diet craze of the ’90s, not all fat is bad. ATrusted Source 2017 studyTrusted Source published in the Nutrition Journal showed that intake of healthy dietary fats, such as polyunsaturated fats, can improve cholesterol levels and reduce obesity risk.`},
    
    {subtitle: "Consume less processed and sugary foods",
    text: `According to a 2016 studyTrusted Source published in The American Journal of Clinical Nutrition,consumption of processed and ultra-processed foods is linked to a higher risk of obesity. Many processed foods are high in fat, salt, and sugar, which can encourage overeating.`},
    
    {subtitle: "Eat more servings of vegetables and fruits" ,
    text: `The daily recommendation for fruit and vegetable intake is five to nine servings per day for adults. Filling your plate with veggies and fruit can help keep calories reasonable and reduce the risk of overeating.`},
    
    {subtitle: "Eat plenty of dietary fiber",
        text: `Studies continue to show that dietary fiber plays a role in weight maintenance. One 2012 trialTrusted Source found that people who took a fiber complex supplement three times daily for 12 weeks lost up to 5 percent of their body weight.`},
    
    {subtitle: "Focus on eating low–glycemic index foods",
        text: `The glycemic index (GI) is a scale used to measure how quickly a food item will raise your blood sugar. Focusing on low-GI foods can help keep blood sugar levels steadier. Keeping your blood glucose levels steady can help with weight management.`},
    
    {subtitle: "Get the family involved in your journey",
        text: `Social support isn’t just for children and teens — it’s important for adults to feel supported too. Whether cooking with family or going on walks with friends, getting people involved can help to encourage a healthy lifestyle.`},
    
    {subtitle: "Engage in regular aerobic activity",
        text: `Incorporating regular physical activity into your schedule is important for maintaining or losing weight, among other benefits. The CDCTrusted Source recommends 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity per week.`},
    
    {subtitle: "Incorporate a weight training regimen",
        text: `Weight training is just as important to weight maintenance as aerobic activity. In addition to weekly aerobic activity, the WHO recommends weight training that involves all your major muscles at least two times per week.`},
    
    {subtitle: "Focus on reducing daily stress",
        text: `Stress can have many effects on the body and mind. A 2012 studyTrusted Source suggests that stress may trigger a brain response that changes eating patterns and leads to cravings for high-calorie foods. Eating too many high-calorie foods can contribute to the development of obesity.`},
    
    {subtitle: "Learn how to food budget and meal prep",
        text: `It’s much easier to grocery shop for healthy foods when you have a plan. Creating a food budget and list for your shopping trips can help avoid temptations for unhealthy foods. In addition, prepping meals can allow you to have ready-to-go healthy meals.`},
    ],
    Obese: [
    {subtitle: "What is the BMI?", 
    text:`The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. The BMI calculation divides an adult's weight in kilograms by their height in metres squared. For example, A BMI of 25 means 25kg/m2.`},
    {subtitle: "What does my BMI say about me?",
    text: `For most adults, an ideal BMI is in the 18.5 to 24.9 range.

    For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.
    
    If your BMI is:
    
    below 18.5 – you're in the underweight range
    between 18.5 and 24.9 – you're in the healthy weight range
    between 25 and 29.9 – you're in the overweight range
    between 30 and 39.9 – you're in the obese range`},
    {subtitle: "How to prevent being overweight?",
    text:`Many of these obesity prevention tips are the same for losing or maintaining a healthy weight. The bottom is line that eating a healthy diet and getting more physical activity can help prevent obesity.`},
    {subtitle: 'Consume less “bad” fat and more "good" fat',
    text: `Contrary to the belief behind the low-fat diet craze of the ’90s, not all fat is bad. ATrusted Source 2017 studyTrusted Source published in the Nutrition Journal showed that intake of healthy dietary fats, such as polyunsaturated fats, can improve cholesterol levels and reduce obesity risk.`},
    
    {subtitle: "Consume less processed and sugary foods",
    text: `According to a 2016 studyTrusted Source published in The American Journal of Clinical Nutrition,consumption of processed and ultra-processed foods is linked to a higher risk of obesity. Many processed foods are high in fat, salt, and sugar, which can encourage overeating.`},
    
    {subtitle: "Eat more servings of vegetables and fruits" ,
    text: `The daily recommendation for fruit and vegetable intake is five to nine servings per day for adults. Filling your plate with veggies and fruit can help keep calories reasonable and reduce the risk of overeating.`},
    
    {subtitle: "Eat plenty of dietary fiber",
        text: `Studies continue to show that dietary fiber plays a role in weight maintenance. One 2012 trialTrusted Source found that people who took a fiber complex supplement three times daily for 12 weeks lost up to 5 percent of their body weight.`},
    
    {subtitle: "Focus on eating low–glycemic index foods",
        text: `The glycemic index (GI) is a scale used to measure how quickly a food item will raise your blood sugar. Focusing on low-GI foods can help keep blood sugar levels steadier. Keeping your blood glucose levels steady can help with weight management.`},
    
    {subtitle: "Get the family involved in your journey",
        text: `Social support isn’t just for children and teens — it’s important for adults to feel supported too. Whether cooking with family or going on walks with friends, getting people involved can help to encourage a healthy lifestyle.`},
    
    {subtitle: "Engage in regular aerobic activity",
        text: `Incorporating regular physical activity into your schedule is important for maintaining or losing weight, among other benefits. The CDCTrusted Source recommends 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity per week.`},
    
    {subtitle: "Incorporate a weight training regimen",
        text: `Weight training is just as important to weight maintenance as aerobic activity. In addition to weekly aerobic activity, the WHO recommends weight training that involves all your major muscles at least two times per week.`},
    
    {subtitle: "Focus on reducing daily stress",
        text: `Stress can have many effects on the body and mind. A 2012 studyTrusted Source suggests that stress may trigger a brain response that changes eating patterns and leads to cravings for high-calorie foods. Eating too many high-calorie foods can contribute to the development of obesity.`},
    
    {subtitle: "Learn how to food budget and meal prep",
        text: `It’s much easier to grocery shop for healthy foods when you have a plan. Creating a food budget and list for your shopping trips can help avoid temptations for unhealthy foods. In addition, prepping meals can allow you to have ready-to-go healthy meals.`},

    ]
}

export default recomendations;