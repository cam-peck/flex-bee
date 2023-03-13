const answers = new Map();
answers.set(1, { levelDescription: "Welcome to FlexBees! A game to get the honey back to the hive with out bee friends. You'll have to help them out by using your CSS FlexBox skills! Let's get our friend to the hive using justify-content.", levelAnswer: 'justify-content: flex-end', helpType: 'justify', direction: 'row' });
answers.set(2, { levelDescription: "Great job! We've got another friend who needs to get to their hive. Let's get them there!", levelAnswer: 'justify-content: center', helpType: 'justify', direction: 'row' });
answers.set(3, { levelDescription: "Fantastic! Uh oh, it looks like our little friend's home is below us! In order to move here, we'll have to use align-items", levelAnswer: 'align-items: center', helpType: 'align', direction: 'row' });
answers.set(4, { levelDescription: "Let's take our little friend further!", levelAnswer: 'align-items: flex-end', helpType: 'align', direction: 'row' });

export default answers;
