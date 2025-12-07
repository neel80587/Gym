import POWER from '../../assets/photos/strength.jpeg'
import YOGA from '../../assets/photos/yoga.jpeg'
import SPINNING from '../../assets/photos/spinning.jpeg'
import BOX from '../../assets/photos/boxing.jpeg'

const classesByDay = {
    Monday: [
        { name: 'Chest', time: '8:00 AM - 9:00 AM', trainer: '', img:POWER },
      
  
        { name: 'Triceps', time: '7:00 PM - 8:00 PM', trainer: '', img:POWER },
      ],
      Tuesday: [
        { name: 'Back', time: '1:00 PM - 2:00 PM', trainer: '', img:YOGA },
        { name: 'Biceps', time: '6:00 PM - 7:00 PM', trainer: '', img:POWER }
        
      ],
      Wednesday: [
        { name: 'Shoulder', time: '7:00 AM - 8:00 AM', trainer: '', img:YOGA },
        { name: 'Abs', time: '6:00 PM - 7:00 PM', trainer: '', img:POWER },
      ],
      Thursday: [
        { name: 'Chest', time: '6:00 PM - 7:00 PM', trainer: '', img:POWER },
        { name: 'Triceps', time: '7:00 PM - 8:00 PM', trainer: '', img:BOX },
      ],
      Friday: [
        { name: 'Back', time: '5:00 PM - 6:00 PM', trainer: '', img:POWER },
        { name: 'Biceps', time: '6:00 PM - 7:00 PM', trainer: '', img:BOX },
      ],
      Saturday: [
        { name: 'Legs', time: '7:00 AM - 8:00 AM', trainer: '', img:YOGA },
        { name: 'Abs', time: '3:00 PM - 4:00 PM', trainer: '', img:POWER },
      ],
      Sunday: [
        { name: 'Rest', time: '', trainer: '', img:SPINNING },
      ]
  };

export default classesByDay;