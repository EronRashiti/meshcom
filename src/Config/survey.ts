const defaultSurveyJSON = {
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "checkbox",
        "name": "Tell us your need around your bussines and we will review it to contact you as soon as possible",
        "titleLocation": "top",
        "descriptionLocation": "underTitle",
        "hideNumber": true,
        "choices": [
         {
          "value": "item1",
          "text": "New project request"
         }
        ],
        "hasOther": true,
        "otherText": "Something else?",
        "maxSelectedChoices": 1
       }
      ],
      "title": "Detailed Contact"
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "text",
        "name": "What’s your name?",
        "title": "What’s your name?",
        "hideNumber": true,
        "isRequired": true,
        "textUpdateMode": "onTyping"
       }
      ],
      "visibleIf": "{Tell us your need around your bussines and we will review it to contact you as soon as possible} = ['item1']",
      "enableIf": "{Tell us your need around your bussines and we will review it to contact you as soon as possible} = ['item1']",
      "requiredIf": "{Tell us your need around your bussines and we will review it to contact you as soon as possible} = ['item1']",
      "title": "What’s your name?",
      "description": "Type your name"
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "text",
        "name": "What organization are you with?",
        "title": "What organization are you with?",
        "hideNumber": true,
        "isRequired": true
       }
      ],
      "title": "What organization are you with?",
      "description": "Your organization"
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "checkbox",
        "name": "How can we help?",
        "title": "How can we help?",
        "hideNumber": true,
        "correctAnswer": [
         "item1",
         "item2",
         "item3",
         "item4",
         "item5",
         "item6"
        ],
        "isRequired": true,
        "choices": [
         {
          "value": "IT Service",
          "text": "IT Service"
         },
         {
          "value": "Web Design",
          "text": "Web Design"
         },
         {
          "value": "Web Develop",
          "text": "Web Develop"
         },
         {
          "value": "App Develop",
          "text": "App Develop"
         },
         {
          "value": "Graphic Design",
          "text": "Graphic Design"
         },
         {
          "value": "UI/UX Design",
          "text": "UI/UX Design"
         }
        ]
       }
      ],
      "title": "We offer a few services for your bussines.",
      "description": "How can we help?"
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "text",
        "name": "Tell us your desires about your website",
        "title": "Tell us your desires about your website",
        "hideNumber": true
       }
      ],
      "visibleIf": "{How can we help?} = ['IT Service', 'Web Design', 'Web Develop', 'App Develop', 'Graphic Design', 'UI/UX Design']",
      "title": "Tell us your desires about your website",
      "description": "Can you be more specific about your request in some short points?"
     },
     {
      "name": "page6",
      "elements": [
       {
        "type": "text",
        "name": "Where is your bussines located?",
        "title": "Where is your bussines located?",
        "hideNumber": true
       }
      ],
      "title": "Where is your bussines located?"
     },
     {
      "name": "page7",
      "elements": [
       {
        "type": "text",
        "name": "What’s a good email we can reach you at?",
        "hideNumber": true,
        "isRequired": true
       }
      ],
      "title": "What’s a good email we can reach you at?"
     },
     {
      "name": "page8",
      "elements": [
       {
        "type": "checkbox",
        "name": "Submit your form to us and we will review it very soon",
        "title": "Submit your form to us and we will review it very soon",
        "hideNumber": true,
        "correctAnswer": [
         "Yes"
        ],
        "choices": [
         {
          "value": "Yes",
          "text": "Yes"
         },
         {
          "value": "No",
          "text": "No"
         }
        ]
       }
      ],
      "title": "Submit your form to us and we will review it very soon"
     },
     {
      "name": "page9",
      "elements": [
       {
        "type": "expression",
        "name": "We’ve received your response. We’’ll contact you very soon",
        "title": "We’ve received your response. We’’ll contact you very soon"
       }
      ],
      "visibleIf": "{Submit your form to us and we will review it very soon} = ['Yes']",
      "enableIf": "{Submit your form to us and we will review it very soon} = ['Yes']",
      "readOnly": true,
      "title": "We’ve received your response. We’’ll contact you very soon"
     }
    ]
   };
const defaultSurveyCSS = {};
const defaultSurveyDATA = {};

const defaultSurveyConfig = {
    defaultSurveyJSON,
    defaultSurveyCSS,
    defaultSurveyDATA
}

export default defaultSurveyConfig;