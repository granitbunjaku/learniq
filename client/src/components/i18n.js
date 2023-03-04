import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          description: {
            home : {
              hero : {
                title: 'LearnIQ - Master New Skills with Ease',
                desc: 'Our platform is designed to make learning easy, convenient, and fun. With intuitive navigation and personalized recommendations, you can quickly find the courses that are right for you and track your progress as you learn',
                subtitle: 'The Ultimate Learning Platform for Professionals and Lifelong Learners',
              },
              become_mentor: 'Become a Mentor',
              become_learner: 'Become A Learner',
              course_title: 'Some Courses of different categories',
              course: 'Course',
              creator_of_this : 'Creator of this',
              students: { name: 'Students', value: '44 thousand' },
              instructors: { name: 'Instructors', value: '2 thousand' },
              classes: { name: 'Classess', value: '10 thousand' },
              success_stories: {title:"Success Stories", desc:"Some success stories from Students/Mentors of learnIQ"},
              post: {title:"Boost your conversion rate", desc:""},
              features: {title: "Benefits With LearnIQ", desc: "With LearnIQ, you'll have access to thousands of high-quality courses and expert instructors, all in one place."},
              all_features: {
                first_feature: {name: "Virtual Learning", desc: "Virtual Classroom Experience: Attend classes from anywhere, at any time, without having to commute"},
                second_feature: {name: "Diverse Topics", desc: "Wide Range of Topics: Choose from a variety of subjects and topics, from traditional academic subjects to niche interests."},
                third_feature: {name: "Global Networking", desc: "Connect with Teachers and Students: Network and collaborate with educators and peers from all over the world."},
                fourth_feature: {name: "Flexible Scheduling", desc: "Flexibility: Create or attend classes that fit your schedule and learning style."}
              },
            },
            navbar : {
              categories: 'Categories',
              become_mentor: 'Become a Mentor',
              pricing: 'Pricing',
              web_development: {title: 'Web Development', desc: 'Building websites using programming tools and languages.'},
              business: {title: 'Biznesi', desc: 'Activities involved in producing, buying, selling, or trading goods or services for profit.'},
              finance: {title: 'Finance & Accounting', desc: 'Management of money and financial resources.'},
              design: {title: 'Arts & Designs', desc: 'Creative disciplines focused on aesthetic expression and emotional responses.'},
              profile: 'Profile',
              dashboard: 'Dashboard',
              signout: 'Sign out',
              signin: 'Sign in',
            },
            teach : {
              hero: {
                new: 'New',
                new_categories: 'New categories are out',
                title: 'Become a teacher with us',
                desc: "Dont't lose the chance to become a great teacher and change life of others, including your own too. Register right now and start teaching.",
                watch_video: "Watch video",
                become_mentor: "Become a mentor"
              },
              cards: {
                first : {
                  title: "Flexibility",
                  desc: "Online teaching allows for a flexible schedule, which can be particularly appealing to those with other commitments such as family, another job, or personal interests."
                },
                second : {
                  title: "Technological skills",
                  desc: "Online teaching requires proficiency with a range of technology, which can be an appealing opportunity for those who enjoy working with computers and software."
                },
                third : {
                  title: "Increased reach",
                  desc: "Online teaching provides an opportunity to reach students from all over the world, rather than being limited to a specific geographic area."
                }
              },
              wwus_section: {
                title: "Work with us",
                desc: "Start working with LearnIQ and become a great teacher who helps others and his self in the same time. What're you waiting? Clock is ticking.",
                actions: {open_roles : "Open roles", internship : "Internship Program", values: "Our values", leadership: "Meet our leadership"},
                statistics: {offices : "Offices worldwide", colleagues : "Full-time colleagues", hours : "Hours per week", paid_time: "Paid time off"}
              },
              cases: {
                title: "Successful cases",
                desc : "I cannot thank the online course platform enough for transforming my life. It has given me the opportunity to sell my courses to a global audience and build a thriving career. The website's user-friendly interface and comprehensive tools have made it easy for me to create and market my courses. Highly recommended!"
              }
            },
              categories : {
                hero: {
                  title: 'Some of the popular topics',
                },
                cards: {
                  add : "Add to cart",
                  rating : "4.95 out of 5",
                  learn : "Learn More"
                },
                filters: {
                  topic: "Topic",
                  subcategory: "Subcategory",
                  level: "Level",
                  price: "Price",
                },
                course: {
                  title: "The Complete Python Bootcamp From Zero to Hero in Python",
                  desc : "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                }
              }
          }
        }
      },
      sq: {
        translation: {
          description: {
            home : {
              hero : {
                title: 'LearnIQ - Përvetësoni aftësi të reja me lehtësi',
                desc: 'Platforma jonë është krijuar për ta bërë mësimin të lehtë, të përshtatshëm dhe argëtues. Me navigim intuitiv dhe rekomandime të personalizuara, mund të gjeni shpejt kurset që janë të përshtatshme për ju dhe të gjurmoni përparimin tuaj ndërsa mësoni',
                subtitle: 'Platforma e fundit e të mësuarit për profesionistët dhe nxënësit gjatë gjithë jetës',
              },
              become_mentor: 'Bëhuni Mësimdhënës',
              become_learner: 'Bëhuni Nxënës',
              course_title: 'Disa kurse të kategorive të ndryshme',
              course: 'Kurs',
              creator_of_this : 'Krijuesi i kësaj',
              students: { name: 'Studentët', value: '44 mijë' },
              instructors: { name: 'Instruktorët', value: '2 mijë' },
              classes: { name: 'Klasat', value: '10 mijë' },
              success_stories: {title:"Storie suksesi", desc:"Disa storie suksesi nga Studentët/Mentorët e LearnIQ"},
              post: {title:"Rritni normën tuaj të konvertimit", desc:""},
              features: {title: "Përfitimet me LearnIQ", desc: "Me LearnIQ, do të keni akses në mijëra kurse me cilësi të lartë dhe instruktorë ekspertë, të gjithë në një vend."},
              all_features: {
                first_feature: {name: "Mësimi Virtual", desc: "Përvoja virtuale në klasë: Merrni pjesë në klasa nga kudo, në çdo kohë, pa pasur nevojë të udhëtoni"},
                second_feature: {name: "Tema te ndryshme", desc: "Gama e gjerë e temave: Zgjidhni nga një shumëllojshmëri lëndësh dhe temash, nga lëndët tradicionale akademike deri te interesat e veçanta."},
                third_feature: {name: "Rrjetet globale", desc: "Lidhuni me mësues dhe studentë: Rrjetohuni dhe bashkëpunoni me edukatorë dhe bashkëmoshatarë nga e gjithë bota."},
                fourth_feature: {name: "Planifikimi fleksibël", desc: "Fleksibiliteti: Krijoni ose ndiqni klasa që i përshtaten orarit dhe stilit tuaj të të mësuarit."}
              },
          },
            navbar : {
              categories: 'Kategoritë',
              become_mentor: 'Bëhuni Mësimdhënës',
              pricing: 'Çmimet',
              web_development: {title: 'Zhvillimi i Uebit', desc: 'Ndërtimi i faqeve të internetit duke përdorur mjete dhe gjuhë programimi.'},
              business: {title: 'Biznesi', desc: 'Aktivitete të përfshira në prodhimin, blerjen, shitjen ose tregtimin e mallrave ose shërbimeve për përfitim.'},
              finance: {title: 'Financë & Kontabilitet', desc: 'Menaxhimi i parave dhe burimeve financiare.'},
              design: {title: 'Arte dhe dizajne', desc: 'Disiplinat krijuese të fokusuara në shprehjen estetike dhe përgjigjet emocionale.'},
              profile: 'Profili',
              dashboard: 'Paneli',
              signout: 'Dilni',
              signin: 'Hyni',
            },
            teach : {
              hero: {
                new: 'E re',
                new_categories: 'Kategoritë e reja kanë dalë',
                title: 'Bëhuni mësimdhënës me ne',
                desc: "Mos e humbni mundësinë për t'u bërë një mësues i shkëlqyer dhe për të ndryshuar jetën e të tjerëve, duke përfshirë edhe tuajën. Regjistrohu tani dhe fillo mësimin.",
                watch_video: "Shiko Videon",
                become_mentor: "Bëhuni Mësimdhënës"
              },
              cards: {
                first : {
                  title: "Fleksibiliteti",
                  desc: "Mësimdhënia në internet lejon një orar fleksibël, i cili mund të jetë veçanërisht tërheqës për ata me angazhime të tjera si familja, një punë tjetër ose interesa personale."
                },
                second : {
                  title: "Aftësitë teknologjike",
                  desc: "Mësimdhënia në internet kërkon aftësi me një sërë teknologjish, e cila mund të jetë një mundësi tërheqëse për ata që duan të punojnë me kompjuterë dhe softuer."
                },
                third : {
                  title: "Rritja e shtrirjes",
                  desc: "Mësimi online ofron një mundësi për të arritur studentë nga e gjithë bota, në vend që të kufizohet në një zonë të specifikuar gjeografike."
                },
              },
              wwus_section: {
                title: "Punoni me ne",
                desc: "Filloni të punoni me LearnIQ dhe bëhuni një mësues i shkëlqyer që ndihmon të tjerët dhe veten e tij në të njëjtën kohë. Çfarë po pret? Ora po troket.",
                actions: {open_roles : "Rolet e hapura", internship : "Programi i praktikës", values: "Vlerat tona", leadership: "Takoni udhëheqjen tonë"},
                statistics: {offices : "Zyra në mbarë botën", colleagues : "Kolegë me kohë të plotë", hours : "Orë në javë", paid_time: "Pushim me pagesë"}
              },
              cases: {
                title: "Raste të suksesshme",
                desc : "Nuk mund ta falënderoj mjaftueshëm platformën e kurseve online për transformimin e jetës sime. Më ka dhënë mundësinë t'i shes kurset e mia një auditori global dhe të ndërtoj një karrierë të lulëzuar. Ndërfaqja miqësore për përdoruesit dhe mjetet gjithëpërfshirëse të faqes në internet e kanë bërë të lehtë për mua krijimin dhe tregtimin e kurseve të mia. Shumë e rekomanduar!"
              }
            },
              categories : {
                hero: {
                  title: 'Disa nga temat e njohura',
                },
                cards: {
                  add : "Shto në shportë",
                  rating : "4.95 nga 5",
                  learn : "Mëso më shumë"
                },
                filters: {
                  topic: "Tema",
                  subcategory: "Nënkategoria",
                  level: "Niveli",
                  price: "Çmimi",
                },
                course: {
                  title: "Bootcamp i plotë i Python nga zero në hero në Python",
                  desc : "Këtu janë blerjet më të mëdha të teknologjisë së ndërmarrjeve të vitit 2021 deri më tani, në rend të kundërt kronologjik."
                }
              }
          }
        }
      }
    }
  });
  
export default i18n;