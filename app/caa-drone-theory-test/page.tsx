/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import React from 'react';
import Image from 'next/image';
import { CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import ClientLogoMarquee from '@/components/ClientLogoMarquee';

export const metadata: Metadata = {
  title: 'CAA Drone Theory Test Questions and Answers | 2025 Guide',
  description: 'Complete guide to passing the CAA Drone Theory Test with all 40 questions, answers, and expert tips. Free test prep guide with highlighted correct answers.',
  keywords: [
    'CAA drone theory test',
    'drone theory test answers',
    'CAA drone test questions',
    'drone theory test guide',
    'UK drone test',
    'GVC drone test',
    'drone theory test 2025'
  ],
  openGraph: {
    title: 'CAA Drone Theory Test Questions and Answers | 2025 Guide',
    description: 'Complete guide to passing the CAA Drone Theory Test with all 40 questions and answers.',
    type: 'website',
  },
}

export default function CAADroneTheoryTestPage() {
  const questions = [
    {
      number: 1,
      question: "You're out flying in the countryside. Suddenly, you notice an air ambulance flying in the direction of your drone or model aircraft. What should you do?",
      options: [
        "Hover at around 10m or land. Then wait until it's safe to continue with your flight",
        "Attempt to gain the attention of the air ambulance to warn them of your drone or model aircraft.",
        "Fly towards the air ambulance so that the crew can see your drone or model aircraft better."
      ],
      correctAnswer: 0
    },
    {
      number: 2,
      question: "Which of the following statements are correct?",
      options: [
        "Drones and model aircraft are only small, so it's safe to fly them if you're under the influence of drink.",
        "Being fit and safe to fly means never flying under the influence of drink, drugs or medicine, or when you're tired or unwell.",
        "Drones and model aircraft are only small, so it's safe to fly them if you're feeling unwell."
      ],
      correctAnswer: 1
    },
    {
      number: 3,
      question: "Hannah and Sofia are out flying with some friends who all want an aerial photo of themselves. Hannah's drone weighs 240g. Sofia's drone weighs 8kg. Which of them is allowed to briefly fly their drone over the group of friends?",
      options: [
        "Hannah only, because her drone is small.",
        "Neither of them, because it's illegal to fly over people, even when they're with you.",
        "Both of them, as long as their friends have agreed it's OK and they fly safely."
      ],
      correctAnswer: 2
    },
    {
      number: 4,
      question: "You're out flying when you become aware that the emergency services are responding to a nearby road traffic accident. Which of the following should you do?",
      options: [
        "Ask the emergency services if they need you to fly overhead and get some video of what's going on.",
        "Safely and immediately stop flying until it's clear the incident is over.",
        "Fly towards the accident to see if you can get some dramatic video of what's happened."
      ],
      correctAnswer: 1
    },
    {
      number: 5,
      question: "Which of these would be the best way to check if there are any restrictions on whether you can fly at a particular place?",
      options: [
        "Look on a drone app that displays the correct and up-to-date airspace restrictions.",
        "Look on the BBC website.",
        "Look at a local newspaper."
      ],
      correctAnswer: 0
    },
    {
      number: 6,
      question: "Pascal owns a large farm. He sometimes uses a drone to transport items to his farmworkers. One of the farmworkers calls and asks Pascal to use the drone to send over a bottle of chemical cleaning fluid. Can Pascal do this?",
      options: [
        "Yes, so long as Pascal can always see his drone and makes sure that it will not fly over anyone.",
        "Yes, because although the cleaning fluid might be a hazard, Pascal is on his own farm.",
        "No, because you must never use your drone or model aircraft to carry dangerous material."
      ],
      correctAnswer: 2
    },
    {
      number: 7,
      question: "Li is out flying his drone when a hang-glider suddenly appears over the brow of a hill. He comes very close to colliding with the hang-glider, but just about manages to drop to a safe height. What must he do following the near miss?",
      options: [
        "Report the near miss to the Civil Aviation Authority.",
        "Not report what happened because nobody was injured.",
        "Not report what happened because he's worried he may get into trouble."
      ],
      correctAnswer: 0
    },
    {
      number: 8,
      question: "Why is it important that you can always see your drone or model aircraft clearly enough that you can tell which way it's facing?",
      options: [
        "So that your operator ID is visible.",
        "So that you can steer and control it safely, even if something happens unexpectedly.",
        "So that you can tell which way the camera is facing."
      ],
      correctAnswer: 1
    },
    {
      number: 9,
      question: "Ameen is an experienced mountain biker and drone enthusiast. His drone does not have follow-me mode. He decides to have a go at flying his drone while slowly cycling along a familiar track that he knows very well. Is he allowed to do this?",
      options: [
        "Yes, because he's an experienced flier and knows the route well.",
        "No, you must never fly while you could be distracted by another activity.",
        "Yes, because he's only going to cycle slowly."
      ],
      correctAnswer: 1
    },
    {
      number: 10,
      question: "What should you do if you want to fly beyond the rules of the Drone and Model Aircraft Code?",
      options: [
        "Buy a faster drone or model aircraft so you can do more when you fly.",
        "Make sure you have the right authorisation before you fly.",
        "Make sure you've memorised the Drone and Model Aircraft Code."
      ],
      correctAnswer: 1
    },
    {
      number: 11,
      question: "Why should you keep your drone's built-in software (firmware) updated, in line with the manufacturer's instructions?",
      options: [
        "So that air traffic control can see your drone on their radar.",
        "So that your drone performs in the way the manufacturer intends.",
        "So the drone manufacturer can identify you."
      ],
      correctAnswer: 1
    },
    {
      number: 12,
      question: "Which of the following must you check so that you can fly safely?",
      options: [
        "That your drone camera is working.",
        "That there are plenty of people around.",
        "That your drone has enough fuel or battery power to last through your planned flight."
      ],
      correctAnswer: 2
    },
    {
      number: 13,
      question: "Denise is at the coast and wants to fly her 245g drone out to sea and back over the beach. It's a busy bank holiday weekend and the beach is full. Is she allowed to do this?",
      options: [
        "Yes, because her drone is below 250g.",
        "Yes, because the beach is a public space.",
        "No, because the beach is crowded and you must never fly over crowds."
      ],
      correctAnswer: 2
    },
    {
      number: 14,
      question: "Max flies his drone behind a group of tall trees. His drone is out of sight until it comes out the other side. Is this safe?",
      options: [
        "Yes, as long as he's checked behind the trees first.",
        "Yes, because his drone is quickly back in view.",
        "No, because he must be able to see his drone at all times."
      ],
      correctAnswer: 2
    },
    {
      number: 15,
      question: "Which of the following sites are likely to be protected by restricted airspace that will mean you cannot fly a drone or model aircraft around or over them without permission from them?",
      options: [
        "Lakes, rivers, canals and other waterways.",
        "Open countryside.",
        "Military ranges and royal palaces."
      ],
      correctAnswer: 2
    },
    {
      number: 16,
      question: "Three friends are talking about taking their drones and model aircraft to fly in an empty field near to an airport. The field is outside the fence that marks the airport's boundary. Which of the friends is correct?",
      options: [
        "Robin says: \"As long as we don't fly over 120m, we're safe to fly in this field.\"",
        "Scott says: \"We can fly in this field because we're outside the airport's boundary.\"",
        "Ben says: \"We must check that the field is outside the airport's flight restriction zone before we fly.\""
      ],
      correctAnswer: 2
    },
    {
      number: 17,
      question: "Michael's drone is fitted with a camera that enables him to fly using first-person view (FPV). What must he do whenever he wants to fly using first-person view?",
      options: [
        "Make sure he flies his drone out of direct sight so that he gets the most out of using first-person view.",
        "When flying alone, make sure he uses the first-person view to look out for obstacles that may pose a risk to his flight.",
        "Make sure someone stands next to him as his observer and keeps his drone in direct sight with a full view of the surrounding airspace at all times."
      ],
      correctAnswer: 2
    },
    {
      number: 18,
      question: "Raj has an 8kg drone. He flies his drone at a height of 80m in the countryside. What should he do to make sure he keeps flying safely.",
      options: [
        "Fly at a horizontal distance of 40m from any people who are not with him.",
        "Increase the horizontal distance from any people who are not with him to about 80m.",
        "Tell anyone nearby to watch out as he's flying there."
      ],
      correctAnswer: 1
    },
    {
      number: 19,
      question: "Which of the following best describes the difference between a flyer ID and an operator ID?",
      options: [
        "A flyer ID shows you've passed this test and know how to fly safely and legally. An operator ID is what you need if you own or are responsible for a drone or model aircraft.",
        "An operator ID shows you've passed this test and know how to fly safely and legally. A flyer ID is what you need if you own or are responsible for a drone or model aircraft.",
        "There is no difference between a flyer ID and an operator ID."
      ],
      correctAnswer: 0
    },
    {
      number: 20,
      question: "What must you do if you're responsible for several drones or model aircraft that require an operator ID?",
      options: [
        "Label every drone or model aircraft you're responsible for with your flyer ID.",
        "Label every drone or model aircraft you're responsible for with the same operator ID.",
        "Label every drone or model aircraft you're responsible for with a different operator ID for each one."
      ],
      correctAnswer: 1
    },
    {
      number: 21,
      question: "Andrea realises she's accidentally recorded some video through a neighbour's window when filming with her drone. What is Andrea allowed to do with the video?",
      options: [
        "Share the video with friends and family.",
        "Share the video online without editing it.",
        "Share the video online after deleting the part with her neighbour in it."
      ],
      correctAnswer: 2
    },
    {
      number: 22,
      question: "Which of these best describes the open A1 and A3 subcategories of drone and model aircraft flying?",
      options: [
        "High-risk, complex flying.",
        "Basic, low-risk flying.",
        "Moderate-risk flying."
      ],
      correctAnswer: 1
    },
    {
      number: 23,
      question: "Elsa has a 240g drone. Nick has a 6kg drone. They head to a local park. Which of them can fly at this recreational site?",
      options: [
        "Elsa with her 240g drone.",
        "Both of them.",
        "Neither of them."
      ],
      correctAnswer: 0
    },
    {
      number: 24,
      question: "You're planning to go flying in some nearby countryside with a drone that weighs over 1kg. When you look at a map, it looks like part of your flight will go over a busy motorway. Are you allowed to fly over the motorway?",
      options: [
        "Yes, because it's not in a residential area.",
        "No, because you must never fly over people, including people in transport.",
        "Yes, because the traffic is moving fast enough."
      ],
      correctAnswer: 1
    },
    {
      number: 25,
      question: "Sarah is out in the countryside and about to go flying when she spots a light aircraft parked and equipment that suggests there could be an airfield there. However, her drone app is not showing a flight restriction zone (FRZ) for an airport. What should she do?",
      options: [
        "Assume there must be a small airfield without a flight restriction zone (FRZ), and not fly on or near the airfield as she could pose danger to the safety of aircraft.",
        "Assume the airfield must have closed as her drone app does not show a flight restriction zone (FRZ) in the area, and carry on with her flight.",
        "Assume she can continue to fly because her drone app does not show a flight restriction zone (FRZ) in the area."
      ],
      correctAnswer: 0
    },
    {
      number: 26,
      question: "Three friends have hiked up a hill that's 50m high. They're standing at the top of the hill and deciding how high they can fly their drones. Which of them is right?",
      options: [
        "Nilesh says: \"We can fly as high as we like, as long as nobody else is around.\"",
        "Elias says: \"We can fly up to 120m from the closest point of the surface of the earth.\"",
        "Steve says: \"We can only fly up to 70m directly above us because we're already 50m up the hill.\""
      ],
      correctAnswer: 1
    },
    {
      number: 27,
      question: "Anna has two children. Dan is 11 and Ethan is 15. The children own a 500g drone, which they both fly. Anna never goes flying. Which of the following is correct?",
      options: [
        "Both children will need to get a flyer ID. Anna will need to register for an operator ID.",
        "Both children will need to get a flyer ID and register for an operator ID.",
        "Anna will need to get a flyer ID and register for an operator ID."
      ],
      correctAnswer: 0
    },
    {
      number: 28,
      question: "Sangeetha wants to use her drone to record a cycle race. She plans to fly above the race to get some dramatic footage as the cyclists pass. Is she allowed to do this?",
      options: [
        "No, because the cyclists wouldn't be able to move out of the way if something happened to Sangeetha's drone.",
        "Yes, because Sangeetha is flying in the road where she lives.",
        "Yes, because the cyclists are going along a public road and Sangeetha has a right to be there."
      ],
      correctAnswer: 0
    },
    {
      number: 29,
      question: "Three friends are talking about how they watch their drones when out flying on their own. Which one is flying safely?",
      options: [
        "Ruth says she's linked her drone camera to her phone and often flies using just the screen.",
        "Kelechi says he always takes his binoculars with him to watch his drone so he can see it when he flies it far away from him.",
        "Christina says she doesn't use a screen and simply watches her drone because that way she gets the best view of everything in the sky."
      ],
      correctAnswer: 2
    },
    {
      number: 30,
      question: "Marco's drone is over 250g. He's out flying in the countryside and there is nobody out and about. He wants to fly his drone over a nearby holiday cottage. There's a car parked outside and it looks like people could be inside the cottage. Is he allowed to fly over the cottage?",
      options: [
        "No, because the cottage is a residential site.",
        "Yes, because any people around are inside the cottage and not out and about.",
        "No, because you're never allowed to fly in the countryside, even if there are no people around."
      ],
      correctAnswer: 0
    },
    {
      number: 31,
      question: "When must you always have insurance for flying your drone or model aircraft?",
      options: [
        "If you want to fly at night.",
        "If you want to fly for payment or for work.",
        "If you want to record video when flying."
      ],
      correctAnswer: 1
    },
    {
      number: 32,
      question: "Ciaran is out flying his drone at a height of 40m. It's a very blustery day and a group of Scouts are camping 50m away. What should Ciaran consider so that he keeps his flight safe?",
      options: [
        "Whether the Scouts are allowed to go camping there.",
        "Telling the Scout leader that he plans to fly his drone in the area and that they must stay away.",
        "As the weather conditions are windy, he needs to increase the horizontal distance between his drone and the Scouts to more than 50m."
      ],
      correctAnswer: 2
    },
    {
      number: 33,
      question: "Gareth is at a party with a group of friends. He decides to drop some water balloons from his drone. Is he allowed to do this?",
      options: [
        "Yes, because he's with friends.",
        "No, you must never drop anything from a drone or model aircraft.",
        "Yes, because water balloons do not count as dangerous material."
      ],
      correctAnswer: 1
    },
    {
      number: 34,
      question: "Which of the following can you fly within a residential area?",
      options: [
        "Any drone or model aircraft below 250g.",
        "Any drone or model aircraft that weighs 250g or over.",
        "Any drone or model aircraft."
      ],
      correctAnswer: 0
    },
    {
      number: 35,
      question: "Which of the following is one of the things you should check to make sure you can legally fly at a location?",
      options: [
        "That there are no rivers in the surrounding area.",
        "Whether there are any local byelaws that mean you're not allowed to fly from there.",
        "That there are no trees in the surrounding area."
      ],
      correctAnswer: 1
    },
    {
      number: 36,
      question: "You're out flying a drone in an area you know well. It's January and you start to get worried that you might lose sight of your drone in the glare of the low winter sun. What should you do?",
      options: [
        "You can normally see your drone here and you know the area well, so it's not a problem.",
        "Steadily fly your drone back towards you until you're sure you can see it. Then re-assess before deciding whether to carry on.",
        "Land as soon as you lose sight of your drone even though you can't see where it's landing."
      ],
      correctAnswer: 1
    },
    {
      number: 37,
      question: "Stefan wants to fly his 240g drone at a nature reserve to film some nesting birds. Can he do this?",
      options: [
        "Yes, because his drone weighs less than 250g.",
        "No, because you must not fly where you'll disturb or endanger animals and wildlife.",
        "Yes, because there are no people around."
      ],
      correctAnswer: 1
    },
    {
      number: 38,
      question: "What is the legal height limit for flying a drone or model aircraft?",
      options: [
        "120ft (36m)",
        "120m (400ft)",
        "400m (1,310ft)"
      ],
      correctAnswer: 1
    },
    {
      number: 39,
      question: "Theo has model aircraft that's over 5kg. What horizontal distance must he be from a residential, recreational, commercial or industrial site when he flies?",
      options: [
        "50m",
        "150m",
        "120m"
      ],
      correctAnswer: 1
    },
    {
      number: 40,
      question: "Matt, Tim and Rory are in the countryside. The three friends head off to fly their drones, which are all above 4kg. They notice a number of people rambling in the open countryside nearby. Which of the friends flies safely?",
      options: [
        "Tim walks along a public footpath in a neighbouring field until he's at least 50m away from anyone before starting to fly. He avoids flying over anyone.",
        "Matt makes sure he's 50m away from the ramblers before starting to fly. He flies 80m above the ramblers.",
        "Rory walks until he's over 50m away from the ramblers. He flies his drone 20m away from them."
      ],
      correctAnswer: 0
    }
  ];

  return (
    <div className="relative">
      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative -mt-[104px] bg-gradient-to-br from-gold via-gold to-gold-hover text-white pt-[120px] pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                CAA Drone Theory Test Questions and Answers
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Complete guide with all 40 questions and highlighted correct answers
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Content */}
        <section className="py-20 px-6 bg-gradient-to-b from-background-alt to-white">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-text-primary mb-6">
                If you're a drone enthusiast in the UK, you've probably heard about the CAA Drone Theory Test.
              </p>

              <p className="text-lg text-text-primary mb-6">
                This mandatory test is a crucial step for anyone who wants to fly a drone with a camera, which essentially covers most drones available on the market today.
              </p>

              <p className="text-lg text-text-primary mb-6">
                As the founder of the <a href="https://hiredronepilot.uk/" className="text-orange-600 hover:text-orange-700 font-semibold">UK's largest drone pilots for hire network</a> and a holder of a GVC licence, I know first-hand how important it is to pass this test.
              </p>

              <div className="text-center my-12">
                <Image
                  src="/images/peter-leslie-drone-pilot-21.webp"
                  alt="Professional drone pilot"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg mx-auto"
                  loading="lazy"
                />
              </div>

              <p className="text-lg text-text-primary mb-6">
                The CAA Drone Theory Test was my first step on the path to building a successful drone business.
              </p>

              <p className="text-lg text-text-primary mb-6">
                The test itself is relatively short, taking about 20 minutes to complete.
              </p>

              <p className="text-lg text-text-primary mb-6">
                However, the <a href="https://www.caa.co.uk/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-semibold">Civil Aviation Authority (CAA)</a> does not disclose which answers you got right or wrong, making it challenging to know where you need to improve.
              </p>

              <p className="text-lg text-text-primary mb-12">
                In this blog post, I'll be sharing everything you need to know to pass the CAA Drone Theory Test with flying colours.
              </p>

              <h2 className="text-3xl font-bold text-orange-600 mb-6">CAA Drone Theory Test Answers Guide [2025 Update]</h2>
              
              <p className="text-lg text-text-primary mb-6">
                Everything you'll need to know to pass the test is in The Drone and Model Aircraft Code. It's a good idea to read this to ensure you have the most up to date information.
              </p>

              <p className="text-lg text-text-primary mb-8">
                The entire test is open book.
              </p>
            </div>

            {/* 30 Second Summary */}
            <div className="bg-orange-50 rounded-xl p-8 mb-12">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold text-teal">30 Second Summary</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary">The test is free</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary">40 multiple choice questions and a pass mark of 30</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary">You can look at The Drone and Model Aircraft Code during the test if you want to</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary">You should allow at least 30 minutes to complete the test</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary">You can take as long as you like providing you're not inactive for more than 90 minutes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary">You can take the test as many times as you like</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary">The questions may be in a random order</span>
                </li>
              </ul>
            </div>

            {/* Pro Tip */}
            <div className="bg-background-alt border border-border rounded-xl p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-teal mb-2">Pro Tip:</p>
                  <p className="text-text-primary">
                    Questions shuffle each time to keep you on your toes, so <strong>I recommend using Ctrl+F to search for the question you are on.</strong> This will save you precious time during the test!
                  </p>
                </div>
              </div>
            </div>

            {/* Start Test Button */}
            <div className="text-center mb-12">
              <a 
                href="https://register-drones.caa.co.uk/individual" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Start Drone Theory Test
              </a>
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-12">Full CAA Drone Test Answers Below 40/40</h2>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
              {questions.map((q) => (
                <div key={q.number} className="bg-white rounded-xl shadow-lg border border-border p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                      {q.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-teal mb-4">
                        Question {q.number} of 40
                      </h3>
                      <p className="text-text-primary mb-6 leading-relaxed">
                        {q.question}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pl-12">
                    <p className="text-sm font-semibold text-text-secondary mb-3">Select one</p>
                    {q.options.map((option, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          index === q.correctAnswer
                            ? 'bg-orange-50 border-orange-200 text-teal'
                            : 'bg-background-alt border-border text-text-primary'
                        }`}
                      >
                        <div className="flex items-start">
                          {index === q.correctAnswer && (
                            <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`${index === q.correctAnswer ? 'font-semibold' : ''}`}>
                            {option}
                            {index === q.correctAnswer && (
                              <span className="ml-2 text-gold font-bold">– Correct</span>
                            )}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* After Test Content */}
        <section className="py-20 px-6 bg-background-alt">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-600 mb-8">Once You Have Passed The Drone Theory Test</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-text-primary mb-6">
                Passing the CAA Drone Theory Test is a significant milestone for any drone enthusiast in the UK. It demonstrates your commitment to flying safely and legally, and it opens up a world of opportunities for aerial photography, videography, and more.
              </p>

              <p className="text-lg text-text-primary mb-6">
                With your newly acquired Flyer ID and Operator ID (if required), you can confidently take to the skies knowing that you have the knowledge and skills necessary to operate your drone responsibly.
              </p>

              <p className="text-lg text-text-primary mb-6">
                As you embark on your drone flying adventures, remember to always prioritize safety and follow the rules and regulations set forth by the CAA.
              </p>

              <div className="text-center my-12">
                <Image
                  src="/images/peter-leslie-drone-pilot-24.webp"
                  alt="Professional drone pilot with equipment"
                  width={800}
                  height={533}
                  className="rounded-lg shadow-lg mx-auto"
                  loading="lazy"
                />
              </div>

              <p className="text-lg text-text-primary mb-6">
                Keep your Flyer ID with you whenever you're flying, and make sure your Operator ID is clearly visible on your drones.
              </p>

              <p className="text-lg text-text-primary mb-6">
                By setting a good example and flying responsibly, you can help promote a positive image of the drone community and ensure that the UK's airspace remains safe and accessible for all.
              </p>

              <p className="text-lg text-text-primary">
                So go ahead, spread your wings, and enjoy the incredible views and experiences that drone flying has to offer!
              </p>
            </div>
          </div>
        </section>

        {/* Logo Banner */}
        <ClientLogoMarquee className="border-y-0" />
      </div>
    </div>
  );
}
