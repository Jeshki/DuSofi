// src/ideologiesData.js

// Paveikslėlių importai – įsitikinkite, kad šie failai egzistuoja jūsų nurodytuose keliuose.
import christianityImg from './pages/img/ideologies/christian.jpeg';
import materialismImg from './pages/img/ideologies/materialism.jpeg';
import idealismImg from './pages/img/ideologies/idealist.jpeg'; // Assuming 'idealist.jpeg' is the correct filename now
import empiricismRealismImg from './pages/img/ideologies/realism.jpeg';
import rationalismDualismImg from './pages/img/ideologies/dualism.jpeg';
import criticalExistentialismPhenomenologyImg from './pages/img/ideologies/existentialism.jpeg';
import islamicPhilosophyImg from './pages/img/ideologies/islamic.jpeg';
import hinduismImg from './pages/img/ideologies/hinduism.jpeg';
import buddhismImg from './pages/img/ideologies/buddhism.jpeg';
import spiritualityImg from './pages/img/ideologies/spirituality.jpeg';
import ethicsPoliticsImg from './pages/img/ideologies/politics.jpeg';
import stoicismImg from './pages/img/ideologies/stoics.jpeg'; // Assuming 'stoics.jpeg' is the correct filename now


// ideologiesMainImage importas perkeltas į src/pages/Ideologies.jsx failą.

// FIX: Changed 'idealogies' to 'ideologies' and kept it as a named export.
export const ideologies  = [
  {
    id: 'Christian Philosophy', // Matches IdeologicalGroups key
    name: 'Christian Philosophy',
    description: `Christian philosophy is an intellectual tradition that seeks to reconcile Christian faith and rational thought. It is not monolithic and encompasses various currents and perspectives, but it shares certain fundamental features and principles that allow it to be described as an ideology – a worldview or system of thought that shapes the understanding of reality, values, and the human place in the world. The primary characteristic of Christian philosophy as an ideology is its foundation – Christian revealed truth, based primarily on the Bible and the teaching of the Church. This revealed truth is considered the highest source that informs and guides philosophical inquiry. Although Christian philosophers use the tools and methods of rational reason, they do so within the context of faith, seeking to better understand and substantiate the truths of faith, address philosophical problems arising from faith, and critically evaluate other worldviews.`,
    image: christianityImg, // Paveikslėlis pridėtas
    subSections: [
      {
        title: 'Concept of God',
        content: `A central element is the belief in one, transcendent, omniscient, omnipotent, and infinitely good God – the Creator and Governor of Providence. God is the ground and purpose of all reality. Christian philosophy examines the nature of God, His attributes, His relationship with the world and humanity, often drawing upon theological dogmas, suchios as the doctrine of the Holy Trinity.`
      },
      {
        title: 'Concept of Humanity',
        content: `The human being is understood as a creature of God, created in the image of God, possessing reason, free will, and a soul. The ideology emphasizes human dignity, but also human sinfulness and the need for redemption. The meaning of human existence is linked to the relationship with God and the pursuit of living according to His will.`
      },
      {
        title: 'Concept of the World',
        content: `The world is considered God's creation, possessing order and purpose. Although the world is real and can be studied rationally, its ultimate meaning and purpose are revealed only through faith. The ideology may explore themes such as the goodness of creation, the origin of evil, and the end times (eschatology).`
      },
      {
        title: 'Concept of Knowledge (Epistemology)',
        content: `Christian philosophy acknowledges the importance of reason and sensory experience for knowledge, but also emphasizes the role of revelation, faith, and spiritual experience. Truth is considered objective and ultimately originating from God. The ideology addresses questions of the relationship between faith and reason, seeking to demonstrate the rationality of faith or its compatibility with reason.`
      },
      {
        title: 'Concept of Ethics and Morality',
        content: `The basis of morality is God's character and His commands, revealed through Sacred Scripture and natural law. Ethics are both deontological (based on duty) and teleological (oriented towards a goal – drawing closer to God). The ideology highlights Christian virtues (faith, hope, and love) and the pursuit of living a virtuous life pleasing to God.`
      },
      {
        title: 'Historical Context and Influence',
        content: `Christian philosophy developed in close interaction with ancient philosophy, particularly Platonism and Aristotelianism. Thinkers such as Augustine sought to reconcile Christian truths with Platonic ideas, while Thomas Aquinas integrated Aristotle's philosophy into Christian theology, creating an influential system of scholasticism. During the Middle Ages, Christian philosophy dominated Western thought and had a profound influence on the formation of Western civilization and the development of science, law, and art. Although it is no longer the sole dominant philosophical current in the modern world, Christian philosophy remains vibrant, exploring new challenges and engaging in dialogue with other ideologies and worldviews.`
      }
    ]
  },
  {
    id: 'Materialists', // Matches IdeologicalGroups key
    name: 'Philosophy of Materialism',
    description: `Materialism is a philosophical position that asserts that all existing reality is ultimately material in nature. According to materialism, everything we experience and observe, including consciousness and mental phenomena, can be explained through the interaction of matter and physical processes. It is one of the oldest philosophical currents, originating in antiquity and continuing to this day.`,
    image: materialismImg, // Paveikslėlis pridėtas
    subSections: [
      {
        title: 'Primacy of Matter',
        content: `Materialism adheres to the ontological principle that matter is the fundamental and sole existing substance. Everything that is, is either matter or dependent on matter. Immaterial entities such as the soul, spirit, or God are generally denied or explained as the result of complex material processes.`
      },
      {
        title: 'Reductionism (often)',
        content: `Many forms of materialism argue that complex phenomena can be reduced or explained through the properties of their constituent parts, i.e., matter and its interactions. For instance, consciousness can be explained as the result of brain activity.`
      },
      {
        title: 'Scientific Approach',
        content: `Materialism is closely associated with the scientific method and often relies on scientific discoveries to explain reality. Physics, chemistry, biology, and neuroscience are considered key disciplines capable of revealing the nature of the world.`
      },
      {
        title: 'Rejection of the Supernatural',
        content: `Materialism typically dismisses any explanations related to supernatural forces or entities. All phenomena must be explained by natural causes.`
      },
      {
        title: 'History and Notable Representatives',
        content: `Materialist ideas can be found in ancient Greek philosophy, particularly in the atomism of Leucippus and Democritus, who argued that the world is composed of indivisible particles – atoms. Later, materialism revived in modern philosophy, associated with thinkers such as Thomas Hobbes, and later French Enlightenment materialists like Julien Offray de La Mettrie and Paul-Henri Thiry d'Holbach. In the 19th century, materialism took on a new form in the guise of dialectical materialism, associated with the names of Karl Marx and Friedrich Engels. This current emphasized the role of matter and economic factors in the development of society and and history. In 20th-century and contemporary philosophy, materialism remains an influential current, especially in the philosophy of mind, where the relationship between consciousness and the physical body (brain) is examined. Modern materialism is often referred to as physicalism, emphasizing that everything is physical in nature, including not only matter but also energy, forces, and other things described by physics. Materialism has various forms and interpretations, but its core idea remains the same – reality is essentially material, and all phenomena can ultimately be explained through physical processes. This philosophy has had a significant impact on science, worldview, and various areas of society.`
      }
    ]
  },
  {
    id: 'Idealist', // Matches IdeologicalGroups key
    name: 'Philosophy of Idealism',
    description: `Idealism is a philosophical doctrine that asserts that reality is fundamentally spiritual or mental in nature. In contrast to materialism, which prioritizes matter, idealism considers ideas, mind, or consciousness as the primary basis of the universe. The physical world, according to idealism, either is not real in itself or its existence and properties depend on consciousness.`,
    image: idealismImg, // Paveikslėlis pridėtas
    subSections: [
      {
        title: 'Primacy of Spirit or Mind',
        content: `Idealism maintains that mind, consciousness, or spirit are the primary and most fundamental things in reality. Material objects are secondary or even exist only by virtue of the mind (as ideas or perceptions).`
      },
      {
        title: 'Reality as a Mental Construct',
        content: `Many idealists argue that the world as we know it is a construct of our mind or consciousness. Our ideas and perceptions shape our experience, rather than the other way around.`
      },
      {
        title: 'Importance of Ideas',
        content: `Idealism emphasizes the importance of ideas, concepts, and values. Some forms of idealism (e.g., Plato's) argue for the existence of eternal and unchanging ideas (Forms) that are more real than material objects.`
      },
      {
        title: 'Anti-Naturalistic Stance',
        content: `Idealism is often incompatible with strict naturalism, as it recognizes the existence of an immaterial, spiritual reality that may not be subject to the laws of nature as understood by natural science.`
      },
      {
        title: 'Forms of Idealism',
        content: `There are various forms of idealism, differing in which mind or consciousness they prioritize: Subjective Idealism: (e.g., George Berkeley) asserts that only the perceiving mind (subject) and its ideas exist. Things exist only when they are perceived ("to be is to be perceived"). Objective Idealism: (e.g., Plato, Hegel) asserts the existence of an objective spirit, mind, or ideas independent of individual consciousness, which is the basis of all reality. The world is a manifestation of this objective spirit. Transcendental Idealism: (e.g., Immanuel Kant) argues that while material objects exist independently of our mind ("things-in-themselves"), we can only know them through the structures and categories of our mind (e.g., space, time, causality). Thus, our experience of the world is the result of the interaction between our mind and external reality.`
      },
      {
        title: 'History and Notable Representatives',
        content: `The origins of idealism date back to antiquity, with Plato and his theory of Forms considered its most prominent founder. Neoplatonism also developed idealistic ideas. During the Middle Ages, idealistic elements were present in Christian philosophy (especially in St. Augustine). In the modern era, idealism became influential again, particularly through René Descartes' doubts about the existence of the external world and George Berkeley's subjective idealism. German classical philosophy had the greatest impact on modern idealism – Immanuel Kant's transcendental idealism, followed by the objective or absolute idealism of Johann Gottlieb Fichte, Friedrich Schelling, and especially Georg Wilhelm Friedrich Hegel. Although in the 20th century, materialism and other philosophical currents reduced the dominance of idealism, it remains an important part of the history of philosophy and continues to influence some areas of contemporary philosophy, such as the philosophy of mind and metaphysics. Idealism offers an alternative perspective on the nature of reality, emphasizing the fundamental nature of spiritual, mental, or ideal aspects, in contrast to a material understanding of the world.`
      }
    ]
  },
  {
    id: 'Empiricism/Realism', // Matches IdeologicalGroups key
    name: 'Philosophy of Empiricism and Realism',
    description: `Empiricism (from the Greek empeiria – experience) is a theory of knowledge (epistemology) which holds that all or most of our knowledge comes from sensory experience. According to empiricism, the mind at birth is like a "blank slate" (tabula rasa), and all content – ideas, concepts, knowledge – is acquired through interaction with the external world via our senses. Realism (from the Latin res – thing) is a philosophical position which holds that reality, the world, and the objects within it exist independently of our mind, consciousness, perception, or language. Simply put, things are as they are, regardless of whether we know them, see them, or think about them.`,
    image: empiricismRealismImg, // Paveikslėlis pridėtas
    subSections: [
      {
        title: 'Core Principles of Empiricism',
        content: `Primacy of Experience: The main thesis of empiricism is that experience (sensory experience and, for some philosophers, internal reflection) is the primary and most reliable source of knowledge. Denial of A Priori Knowledge (mostly): Most empiricists deny the existence of innate ideas or a priori knowledge that is independent of experience. All knowledge is a posteriori, i.e., acquired after experience. Importance of Observation and Experimentation: Since experience is the main source, empiricism emphasizes the importance of careful observation and experimentation, especially in science. Inductive Reasoning: Although deduction (from general principles to specific cases) is important, empiricists place great emphasis on induction (from specific observations to general conclusions or laws) as a way to expand knowledge based on experience.`
      },
      {
        title: 'History and Notable Representatives of Empiricism',
        content: `Seeds of empiricism can be found in ancient philosophy (e.g., Aristotle's view on knowledge). However, as a distinct and influential current in Western philosophy, empiricism flourished in the Modern era, particularly in Great Britain. The most important representatives of British empiricism are: John Locke, George Berkeley, David Hume. Empiricism had a tremendous impact on the development of scientific methodology and became the basis for many modern natural and social sciences.`
      },
      {
        title: 'Core Principles of Realism',
        content: `Independent Existence of Reality: The main principle of realism is that there exists an objective reality independent of us. Correspondence of Truth to Reality: The realist concept of truth is often based on the correspondence theory – a statement is true if it corresponds to objective reality. Opposition to Idealism and sometimes Anti-Realism: Realism is traditionally contrasted with idealism (which holds that reality is mental in nature) and various forms of anti-realism (which, depending on the domain, may deny the independent existence of certain things – e.g., moral values, scientific theories, mathematical objects).`
      },
      {
        title: 'Forms of Realism (by domain)',
        content: `Realism can be applied in various areas of philosophy: Metaphysical Realism, Epistemological Realism, Scientific Realism, Moral Realism, Realism about Universals.`
      },
      {
        title: 'History and Notable Representatives of Realism',
        content: `Realism is one of the oldest and most widespread philosophical positions, with roots in antiquity. Plato: Although his theory of Forms is often associated with idealism, his realism about universals (the belief that Forms exist in reality, albeit not in the material world) is an important part of the history of realism. Aristotle: Critically evaluated Plato's theory of Forms, but was also a realist, arguing that forms exist within things themselves. Thomas Aquinas: A medieval philosopher who combined Aristotle's ideas with Christian theology, was also a realist, arguing that universals exist in the mind of God, in things themselves, and in our minds. Contemporary Philosophy: Realism remains a strong position in many areas of philosophy, often debated against various forms of anti-realism. Many contemporary scientists and philosophers of science hold a position of scientific realism.`
      }
    ]
  },
  {
    id: 'Rationalism/Dualism', // Matches IdeologicalGroups key
    name: 'Philosophy of Rationalism and Dualism',
    description: `Rationalism (from the Latin ratio – reason, concept, basis) is a philosophical current, especially in the theory of knowledge (epistemology), which asserts that reason is the primary or sole reliable source of knowledge. In contrast to empiricism, which emphasizes the role of experience, rationalism holds the position that truth can be reached mainly through reason, logic, and deduction, independently of sensory experience. Dualism (from the Latin dualis – twofold) is a philosophical position which asserts that in reality there exist two fundamentally different and irreducible (not explainable in terms of the other) substances or principles. Dualism can be applied in various areas, but its most well-known form is mind-body dualism.`,
    image: rationalismDualismImg, // Paveikslėlis pridėtas
    subSections: [
      {
        title: 'Core Principles of Rationalism',
        content: `Primacy of Reason: The main thesis of rationalism is that reason and its ability to think, reason, and understand is the most important and reliable source of knowledge. Innate Ideas (often): Many rationalists argue that humans are born with certain innate ideas or mental structures that are not acquired from experience but are, as it were, imprinted in the mind. These ideas form the basis for all other knowledge. Deductive Reasoning: Rationalists place great emphasis on deduction – a logical process where specific conclusions are derived from general, self-evident truths (postulates, axioms, or innate ideas). Mathematics is often considered an ideal example of rational knowledge. A Priori Knowledge: Rationalism emphasizes the existence of a priori knowledge – knowledge that can be known independently of experience (e.g., logical or mathematical truths).`
      },
      {
        content: `The origins of rationalism date back to antiquity (e.g., Parmenides, Plato). However, as a clearly defined and influential current in Western philosophy, rationalism flourished in the 17th-18th centuries, particularly in Continental Europe. The most important representatives of rationalism during this period are: René Descartes: Often considered the father of modern rationalism. He based his philosophy on radical doubt, seeking to find an indubitable foundation for knowledge ("I think, therefore I am" – Cogito ergo sum). He also developed the theory of innate ideas. Baruch Spinoza: Created a complex rationalist system of metaphysics based on a deductive method similar to geometry. Gottfried Wilhelm Leibniz: Developed the theory of monadology and argued that reality consists of many simple, immaterial substances (monads). He also formulated the principle of sufficient reason. Rationalism had a great influence on the development of philosophy, science, and mathematics, emphasizing the importance of reason in the search for truth.`
      },
      {
        title: 'Mind-Body Dualism',
        content: `This form of dualism holds that the mind (or soul, consciousness) and the physical body (matter) are two distinct entities. They differ in their nature and cannot be explained in terms of each other. Core Idea: There exists both a material (physical body) and an immaterial (mind, consciousness) reality, and neither can be explained solely on the basis of the other. Mental states (thoughts, feelings, perceptions) are not identical to physical processes in the brain, although they may be related to them.`
      },
      {
        title: 'Forms of Mind-Body Dualism',
        content: `There are several types of mind-body dualism: Substance Dualism: (e.g., René Descartes) argues that mind and body are two different substances – the mind is a thinking substance (res cogitans), and the body is material, having extension (res extensa). These substances can exist separately. Property Dualism: Argues that although only one substance exists (physical), it has two kinds of properties – physical (weight, shape) and mental (feelings, thoughts) – which cannot be reduced to each other. Predicate Dualism: Argues that although reality may be physical, our language and thinking about mental states cannot be fully replaced by physical terms.`
      },
      {
        title: 'History and Notable Representatives of Dualism',
        content: `Ideas of mind-body dualism can be found as early as Plato's philosophy, who distinguished between an immortal soul and a mortal body. In medieval philosophy, this idea was developed within the context of Christian theology. The most prominent representative of mind-body dualism is considered to be René Descartes, whose theory of substance dualism had a great influence on modern philosophy. Although later philosophers, such as Spinoza and Leibniz (who were themselves rationalists), criticized Descartes' dualism and proposed monistic (one-substance) solutions, dualism remained an important topic of discussion. In contemporary philosophy of mind, dualism still has proponents, although it often faces challenges related to explaining the interaction between mind and body and reconciling it with discoveries in natural science.`
      }
    ]
  },
  {
    id: 'Critical/Existentialism/Phenomenology', // Matches IdeologicalGroups key
    name: 'Critical Philosophy, Existentialism, and Phenomenology',
    description: `These three philosophical currents – Critical Philosophy (of Immanuel Kant), Existentialism, and Phenomenology – are important in the context of 20th-century philosophy and shaped later directions of thought.`,
    image: criticalExistentialismPhenomenologyImg, // Paveikslėlis pridėtas
    subSections: [
      {
        title: 'Critical Philosophy (of Immanuel Kant)',
        content: `Critical Philosophy, closely associated with the German philosopher Immanuel Kant (1724–1804), represents a fundamental turn in Western thought. It seeks to investigate and establish the limits and possibilities of reason itself, particularly in addressing metaphysical questions. Kant criticized both rationalism and empiricism, arguing that knowledge arises not solely from reason or solely from experience, but is the result of the interaction of these two elements.`
      },
      {
        title: 'Core Principles of Kant\'s Critical Philosophy',
        content: `Transcendental Idealism: Kant argued that our experience of the world is shaped by our mind. We do not know "things-in-themselves" (noumena), which exist independently of us, but we know "appearances" (phenomena), i.e., how things appear to us through our senses and mental structures. Space and time, according to Kant, are not properties of objective reality, but a priori (given prior to experience) forms of our intuition. A Priori and A Posteriori Knowledge: Kant distinguished between a priori knowledge (independent of experience, e.g., mathematical and logical truths) and a posteriori knowledge (derived from experience). He argued for the existence of synthetic a priori judgments – those that add to our knowledge (are synthetic) but are universal and necessary, thus not dependent on experience (are a priori). He considered the basic principles of mathematics and natural science to be such judgments. Categories of Understanding: Our mind has innate structures or categories (e.g., causality, substance, identity) that organize the data of sensory experience and allow us to think about objects and make judgments. These categories are necessary for any experience. Ethics and the Categorical Imperative: Kant's critical philosophy also includes ethics. He formulated the categorical imperative – a universal moral law that dictates how we ought to act regardless of our desires or inclinations. One of its most famous formulations is: "Act only according to that maxim whereby you can at the same time will that it should become a universal law." Morality, according to Kant, is based on reason and duty. Kant's critical philosophy revolutionized philosophy, influencing later movements, especially German Idealism, and his ethical theory remains one of the most influential in the history of Western thought.`
      },
      {
        title: 'The Philosophy of Existentialism',
        content: `Existentialism is a 20th-century philosophical movement that emphasizes individual existence, freedom, and responsibility. The main slogan of existentialism is "existence precedes essence." This means that a human being initially simply exists (is), and only later, through their choices and actions, creates their essence, meaning, and values. There is no predetermined human nature or purpose.`
      },
      {
        title: 'Main Themes and Ideas of Existentialism',
        content: `Existence Precedes Essence: A person is born without inherent meaning or purpose and creates them themselves. This is contrasted with traditional philosophy, which often held that essence (human nature) defines existence. Freedom and Responsibility: The individual is completely free to choose, but consequently bears full responsibility for their choices. This causes anxiety, dread, and despair, as there are no external forces (God, nature, or societal norms) that can justify or alleviate decisions. Anxiety, Dread, and Despair: These emotions are inseparable from the human condition, recognizing one's freedom, responsibility, and the finitude of existence (death). Authenticity: The pursuit of living authentically means embracing one's freedom and responsibility, living according to values created by oneself, rather than blindly following the norms or roles of the crowd. Absurdity: Existentialists often speak of the absurdity of existence, which arises from the inherent human need to find meaning in a world that in itself has no inherent meaning.`
      },
      {
        title: 'Notable Representatives of Existentialism',
        content: `Existentialism is not a single school but rather a common tendency of thought. Its most notable representatives are: Søren Kierkegaard: A 19th-century Danish philosopher, considered a precursor to existentialism. Emphasized individual subjectivity, faith, and passion, and criticized systematic philosophy. Friedrich Nietzsche: A German philosopher who proclaimed the "death of God" and called for a revaluation of all values, emphasizing the will to power and the idea of the Übermensch. Martin Heidegger: A German philosopher who investigated the question of the meaning of being ("Being and Time"). Analyzed human existence (Dasein) in the world. Jean-Paul Sartre: A French philosopher, writer, and playwright, one of the most prominent representatives of atheistic existentialism. Extensively explored themes of freedom, responsibility, and bad faith (the denial of one's freedom). Albert Camus: A French writer and philosopher, associated with existentialism although he did not call himself one. Explored the theme of the absurd and the meaning of rebellion against it. Simone de Beauvoir: A French writer and philosopher, who developed existentialist ideas in the context of feminism. Existentialism had a significant impact on literature, art, and psychology, prompting reflection on individual freedom, responsibility, and the search for meaning in the modern world.`
      },
      {
        title: 'The Philosophy of Phenomenology',
        content: `Phenomenology (from Greek phainomenon – that which appears, and logos – study) is a philosophical movement whose primary goal is to investigate the experience of consciousness as it is, "as a phenomenon." Phenomenology seeks to describe and understand the structures of our experience, without regard to whether the objects of experience exist realistically in the external world. It sets aside (or "suspends," "brackets") the usual belief in the existence of objective reality in order to investigate consciousness's experience itself.`
      },
      {
        title: 'Core Principles and Methods of Phenomenology',
        content: `Intentionality: The main characteristic of consciousness, according to phenomenology, is its intentionality – consciousness is always "about something" or "directed towards something." Consciousness is always the consciousness of a certain object (real or imagined, material or abstract). Epoché (Bracketing): A phenomenological method in which the usual belief in the existence of the external world and scientific or metaphysical claims about it is temporarily set aside. This is done to investigate the experience itself as it appears to consciousness. Noesis and Noema: Phenomenology analyzes the structure of experience, distinguishing between noesis (the act of consciousness – e.g., seeing, hearing, thinking) and noema (the object of the act of consciousness as it appears to consciousness – that which is seen, heard, thought about). Intuition of Essences: Phenomenology seeks to grasp the general, essential structures or "essences" of experience through individual experiences. This is achieved through variation in imagination.`
      },
      {
        title: 'History and Notable Representatives of Phenomenology',
        content: `Phenomenology as an independent philosophical current emerged at the beginning of the 20th century. Edmund Husserl: Considered the founder and main theorist of phenomenology. In his works ("Logical Investigations," "Ideas Pertaining to a Pure Phenomenology and to a Phenomenological Philosophy"), he developed the phenomenological method and the concept of intentionality. Martin Heidegger: Although he adopted the phenomenological method from Husserl, he later took his own path, applying it to investigate the question of the meaning of being. His work "Being and Time" is important to both phenomenology and existentialism. Maurice Merleau-Ponty: A French philosopher who developed the phenomenology of the body and perception. Emphasized the importance of the body as both the subject and object of experience. Alfred Schutz: Applied phenomenological ideas to the social sciences, investigating the structures of the everyday life-world. Phenomenology had a significant impact on continental philosophy, psychology, sociology, and other humanities and social disciplines, offering a new method for investigating consciousness and experience. It also influenced existentialism, particularly in the works of Martin Heidegger and Jean-Paul Sartre.`
      }
    ]
  },
  {
    id: 'Islamic Philosophy', // Matches IdeologicalGroups key
    name: 'Islamic Philosophy',
    description: `Philosophy developed in societies that recognize Islam, commonly referred to as Islamic philosophy, is a rich and diverse intellectual tradition. It emerged in the 7th century and flourished during the period known as the Islamic Golden Age, from the 9th to the 12th century. Islamic philosophy combines ideas from Greek philosophy (especially Aristotle and Neoplatonism) with Islamic religious texts and teachings, aiming to address universal questions of existence, knowledge, ethics, politics, and the nature of God.`,
    image: islamicPhilosophyImg, // Paveikslėlis pridėtas
    subSections: [
      {
        title: 'Reconciliation of Faith and Reason',
        content: `One of the central themes of Islamic philosophy is the attempt to reconcile Islamic revealed truth (especially the Quran and Hadith) with rational reason and philosophical thinking derived from the Greek tradition. Philosophers sought to demonstrate that true reason does not contradict true faith.`
      },
      {
        title: 'Concept of God (Tawhid)',
        content: `Islam strongly emphasizes the oneness of God (Tawhid). Philosophers examined the attributes of God, His relationship with creation, God's knowledge and will, often using philosophical arguments to substantiate God's existence.`
      },
      {
        title: 'Creation and the Nature of the World',
        content: `Islamic philosophy explored questions of the creation of the world, causal relationships, the relationship between matter and form, drawing upon both Greek cosmological ideas and Islamic teachings about God as the Creator.`
      },
      {
        title: 'Concept of Humanity',
        content: `The nature of man, the nature and immortality of the soul, the role of reason in knowledge, the relationship between free will and predestination (fate), man's place in creation, and his moral obligations were examined.`
      },
      {
        title: 'Ethics and Politics',
        content: `Islamic philosophers developed ethical theories, often based on both Islamic moral principles and the ideas of Aristotle and Plato on virtues and justice. Questions of political philosophy, the concept of the ideal state, and the qualities of a ruler were also explored, based on Plato's ideas in "The Republic," adapted to the Islamic context.`
      },
      {
        title: 'Theory of Knowledge (Epistemology)',
        content: `Discussions revolved around the sources of knowledge – whether it is only sensory experience, reason, or also revelation and mystical intuition. The criterion of truth and the possibilities of reason to know reality were examined.`
      },
      {
        title: 'Major Schools of Islamic Philosophy',
        content: `Falsafa (Philosophy): This school relied most heavily on Greek philosophy, particularly the ideas of Aristotle and Neoplatonism. The most famous representatives are al-Kindi, al-Farabi, Ibn Sina (Avicenna), and Ibn Rushd (Averroes). They sought to systematically expound philosophical truths, sometimes causing tension with traditional Islamic theology (Kalam). Kalam (Theology): This current focused primarily on defending and explaining Islamic theological dogmas using rational arguments and dialectic. Kalam schools (e.g., Mu'tazila, Ash'ariyyah) debated the attributes of God, the creation of the Quran, and free will. Although primarily theology, it employed philosophical methods. Ishraq (Illuminationist Philosophy): Founded by Shahab al-Din Suhrawardi (12th century). This school sought to combine philosophy and mysticism, emphasizing intuitive and illuminated knowledge arising from direct contact with spiritual reality. Transcendent Philosophy (Hikmat al-Muta'aliyah): A school founded by Mulla Sadra in 17th-century Iran, aiming to integrate elements of Falsafa, Kalam, Ishraq, and Gnosticism. It emphasized the primacy of existence (asālat al-wujūd) and the substantial motion of being.`
      },
      {
        title: 'Historical Context and Influence',
        content: `The Golden Age of Islamic philosophy was a period when Muslim, Christian, and Jewish scholars collaborated closely, translating and commenting on the works of Greek philosophers. This work had a huge impact on Western philosophy, especially during the Middle Ages, when many ideas of Greek and Islamic philosophers reached Europe through Spain (Al-Andalus) and influenced thinkers such as Thomas Aquinas. Although philosophical discussions in the Islamic world somewhat subsided in later centuries, Islamic philosophy has remained vibrant, especially in certain regions (e.g., Iran), and continues to influence contemporary Islamic thought.`
      }
    ]
  },
  {
    id: 'Hinduism', // Matches IdeologicalGroups key
    name: 'Hinduism Philosophy',
    description: `The philosophy of Hinduism is one of the oldest and richest philosophical traditions in the world, closely linked to the religious and cultural origins of India. It is not a monolithic system but rather a broad spectrum of currents, schools, and perspectives, based on ancient texts, especially the Vedas (including the Upanishads), the "Bhagavad Gita," and the Puranas. The term "Hindu philosophy" in Western thought encompasses various Indian philosophical systems that accept the authority of the Vedas (Astika schools), although within Hinduism itself, philosophy (Darshana, literally "viewpoint" or "seeing") is a way of seeing and understanding reality.`,
    image: hinduismImg, // Paveikslėlis pridėtas
    subSections: [
      {
        title: 'Brahman',
        content: `The ultimate, unchanging, impersonal reality, the ground and source of the universe. Brahman is omnipresent and all-encompassing. Various schools interpret its nature and relationship with the world and individual souls differently.`
      },
      {
        title: 'Atman',
        content: `The individual soul or the true self. Hindu philosophy examines the nature of Atman and its relationship with Brahman. Many schools hold that Atman is essentially identical to Brahman (non-dualistic schools) or is a part of it (qualified dualistic schools), and the suffering of the individual soul arises from ignorance of this identity or connection.`
      },
      {
        title: 'Karma',
        content: `The law of action and consequence. Every action has a corresponding result, which affects the present and future lives of the individual soul. Karma is the primary force driving the cycle of rebirth.`
      },
      {
        title: 'Samsara',
        content: `The cycle of birth, death, and reincarnation. The soul travels through countless lives, governed by the laws of karma, experiencing suffering and imperfection.`
      },
      {
        title: 'Moksha',
        content: `Liberation from the cycle of Samsara, the ultimate goal. Moksha is the soul's union with Brahman, the realization of the true nature of the self (Atman), transcending the material world and suffering. Different schools offer different paths to achieve Moksha (e.g., the path of knowledge (Jnana Yoga), the path of action (Karma Yoga), the path of devotion (Bhakti Yoga)).`
      },
      {
        title: 'Dharma',
        content: `Duty, righteousness, moral and social conduct that upholds cosmic order. Dharma is related to the individual's role in society and their responsibilities, depending on their status and stage of life.`
      },
      {
        title: 'Artha',
        content: `Material well-being, wealth, success. Considered a legitimate goal of life, but must be pursued without violating the principles of Dharma.`
      },
      {
        title: 'Kama',
        content: `Pleasure, desires, emotional satisfaction. Also considered a legitimate goal, but must be regulated within the context of Dharma and the pursuit of Moksha.`
      },
      {
        title: 'Major Schools of Hindu Philosophy (Darshanas)',
        content: `Traditional Hindu philosophy is divided into six orthodox (astika) schools that accept the authority of the Vedas: Nyaya: A school of logic and epistemology, examining the sources of valid knowledge (Pramanas). Vaisheshika: A naturalistic and atomistic school, describing the universe through categories (padarthas) and asserting that the world is composed of eternal atoms. Samkhya: A dualistic school, distinguishing two primary principles of reality: consciousness (Purusha) and matter (Prakriti). It is generally agnostic regarding God. Yoga: Closely related to Samkhya, but adds a practical discipline aimed at calming the mind and liberating consciousness from the influence of matter. It recognizes God (Ishvara) as a helpful element on the spiritual path. Purva Mimamsa (Pūrva Mīmāṃsā): A school primarily focused on the interpretation and justification of Vedic rituals and actions. Vedanta: One of the most important and influential schools, based on the Upanishads ("the end of the Vedas"). It has many sub-schools, including: Advaita Vedanta: (Adi Shankara) Non-dualism, asserting that Atman and Brahman are identical, and the material world is an illusion (maya). Vishishtadvaita: (Ramanuja) Qualified non-dualism, asserting that individual souls are parts of Brahman but are not completely identical with it. Dvaita Vedanta: (Madhva) Dualism, asserting that God (Brahman), individual souls, and matter are fundamentally distinct realities.`
      },
      {
        title: 'History and Notable Representatives',
        content: `The origins of Hindu philosophy date back to the Vedic period (around 1500 BCE). The Upanishads (around 800-400 BCE) mark a transition from ritualism to philosophical speculations about Brahman and Atman. During the classical period (around 200 BCE – 500 CE), the main Darshanas were codified. Vedanta flourished in the medieval period with thinkers like Adi Shankara (8th century), Ramanuja (11th-12th century), and Madhva (13th century). In modern times, Hindu philosophy has continued to develop, responding to Western influence and addressing new challenges. Notable representatives of Hindu philosophy, in addition to the mentioned Vedanta thinkers, include the founders and commentators of various Darshana schools, as well as modern thinkers such as Ram Mohan Roy, Swami Vivekananda, and Sarvepalli Radhakrishnan. Hindu philosophy explores fundamental questions about human existence, the nature of reality, knowledge, and ultimate liberation, offering various theoretical and practical paths for spiritual development and the realization of truth.`
      }
    ]
  },
  {
    id: 'Buddhism', // Matches IdeologicalGroups key
    name: 'Buddhism Philosophy',
    description: `Buddhism is not only a religion but also a rich philosophical tradition originating in North India in the 6th century BCE, based on the teachings of Prince Siddhartha Gautama (the Buddha). Buddhist philosophy seeks to understand the nature of reality, explain the causes of suffering, and offer a path to liberation from it, achieving enlightenment (Bodhi) and Nirvana.`,
    image: buddhismImg, // Paveikslėlis pridėtas
    subSections: [
      {
        title: 'The Four Noble Truths',
        content: `This is the fundamental basis of the Buddha's teaching: The Truth of Suffering (Dukkha): Existence is associated with suffering, dissatisfaction, impermanence. This includes birth, old age, sickness, death, separation from loved ones, association with disliked ones, and the not getting what one wants. The Truth of the Origin of Suffering (Samudaya): The main cause of suffering is craving (especially craving for existence, having, and becoming) and attachment, arising from ignorance. The Truth of the Cessation of Suffering (Nirodha): Suffering can be ceased by completely abandoning craving and attachment. The Truth of the Path to the Cessation of Suffering (Magga): There is a path leading to the end of suffering – this is the Noble Eightfold Path.`
      },
      {
        title: 'The Noble Eightfold Path',
        content: `This is a practical guide on how to live in pursuit of enlightenment. It includes three main divisions: Wisdom (Prajna): Right Understanding and Right Thought/Intention. Ethical Conduct (Sila): Right Speech, Right Action, and Right Livelihood. Concentration (Samadhi): Right Effort, Right Mindfulness, and Right Concentration.`
      },
      {
        title: 'Karma',
        content: `The law of action and consequence. In Buddhism, karma is understood as volitional actions (physical, verbal, and mental) that determine the experiences of the individual soul in this and future lives within the cycle of Samsara.`
      },
      {
        title: 'Samsara',
        content: `The cycle of rebirth, suffering, and death, from which liberation is sought. Unlike Hinduism, Buddhism denies the existence of a permanent, unchanging soul (Atman).`
      },
      {
        title: 'Nirvana',
        content: `The ultimate goal in Buddhism – liberation from Samsara, suffering, and individual existence. Nirvana is described as a state of peace, bliss, the cessation of craving and attachment.`
      },
      {
        title: 'The Three Marks of Existence',
        content: `Buddhist philosophy emphasizes three fundamental characteristics of all conditioned phenomena: Impermanence (Anicca): Everything is constantly changing; nothing is permanent and eternal. Dissatisfaction/Suffering (Dukkha): Due to impermanence and attachment to changing things, suffering arises. Non-self (Anatta): There is no permanent, unchanging individual soul or "self." What we consider the self is a composite of constantly changing physical and mental processes (skandhas).`
      },
      {
        title: 'Major Schools and Traditions of Buddhist Philosophy',
        content: `As Buddhism spread to various regions of Asia, many different schools and traditions emerged, interpreting the Buddha's teaching differently and developing various philosophical aspects. The main traditions are: Theravada: ("Teaching of the Elders") Considered the oldest surviving form of Buddhism, it primarily relies on the Pali Canon. It emphasizes individual enlightenment and the ideal of the arhat. Mahayana: ("Great Vehicle") Emerged later and became the dominant form in East Asia (China, Japan, Korea, Vietnam). It emphasizes the ideal of the bodhisattva – a being who seeks enlightenment for the benefit of all sentient beings. New philosophical schools emerged within Mahayana, such as Madhyamaka (emphasizing emptiness/shunyata) and Yogacara (emphasizing the importance of consciousness). Vajrayana: ("Diamond Vehicle") Often considered an extension of Mahayana, prevalent in Tibet, Bhutan, and Mongolia. It employs esoteric practices, rituals, mantras, and mandalas to achieve faster enlightenment. Zen: (Chan in China) Originated in China and spread to Japan, Korea, and Vietnam. It emphasizes direct experience, meditation (zazen), and insight into one's true nature, paying less attention to theoretical texts.`
      },
      {
        title: 'History and Notable Representatives',
        content: `Buddhism originated in India, and after the Buddha's death, his disciples transmitted and developed the teachings, which were recorded in various canons. During the reign of Emperor Ashoka (3rd century BCE), Buddhism spread throughout India and beyond. Later, over many centuries, Buddhism migrated to Central Asia, East Asia, and Southeast Asia, adapting to local cultures and giving rise to new philosophical ideas. Notable Buddhist philosophers, besides the Buddha himself, include thinkers such as Nagarjuna (2nd century CE, founder of the Madhyamaka school), Asanga and Vasubandhu (4th-5th century, representatives of the Yogacara school), Dignaga and Dharmakirti (6th-7th century, Buddhist logicians and epistemologists). Buddhist philosophy offers a deep understanding of the nature of reality, suffering, and the path to liberation, emphasizing personal experience, ethical conduct, meditation, and mental discipline as the main paths to enlightenment.`
      }
    ]
  },
  {
    id: 'Spirituality', // Matches IdeologicalGroups key
    name: 'Philosophy of Spirituality',
    description: `Spirituality is not a separate, unified branch or school of philosophy in the same way as materialism or idealism. Instead, spirituality is a broad and multifaceted phenomenon that becomes the object of investigation for various philosophical traditions and perspectives. The philosophy of spirituality, in a broad sense, is a philosophical attempt to understand the nature of spirituality, its sources, its meaning for human life, and its relationship with other philosophical concepts such as being, knowledge, consciousness, ethics, and transcendence.`,
    image: spiritualityImg, // Paveikslėlis pridėtas
    subSections: [
      {
        title: 'What is Spirituality in a Philosophical Context?',
        content: `In philosophy, spirituality is often understood not only in a narrow religious sense but as an inner human experience related to: The search for meaning and purpose in life. A sense of connection to something larger than oneself (this can be God, nature, the universe, humanity, or a transcendent reality). An inner journey, self-knowledge, and personal growth. Experiences that go beyond ordinary sensory perception and rational thought (e.g., mystical experiences). The cultivation and practice of values not solely related to the material world.`
      },
      {
        title: 'Philosophy examines these aspects of spirituality by posing fundamental questions:',
        content: `Metaphysics: What is spiritual reality (if it exists)? What is its relationship to the material world? Is consciousness merely a function of the material body (brain), or does it have a spiritual aspect? Does a transcendent being or principle exist with which spirituality is connected? Epistemology: How can we know spiritual reality or experience spiritual truths? Is spiritual experience a reliable source of knowledge? What is the relationship between reason, faith, intuition, and mystical experience in the context of spirituality? Ethics: How does spirituality affect human moral behavior and values? Are spiritual beliefs necessary for ethics? How do spiritual practices contribute to the cultivation of virtues and the "good life"? Existence: What is the significance of spirituality for human existence, its finitude, suffering, and death? How does spirituality help find meaning in an absurd world?`
      },
      {
        title: 'Spirituality in Different Philosophical Traditions',
        content: `The concept of spirituality and its significance vary across different philosophical and religious traditions: Western Philosophy: Although rationalism and empiricism, which sometimes criticized or ignored spiritual phenomena, dominated during the Enlightenment and later, the theme of spirituality was also explored by idealists and philosophers interested in religion. In contemporary philosophy, the philosophy of mind, ethics, and philosophy of religion continue to engage with ideas of spirituality. Eastern Philosophy: Indian (e.g., Hinduism, Buddhism) and East Asian (e.g., Daoism, Confucianism) philosophical traditions have been closely linked to spiritual practices and goals from their inception (e.g., liberation from suffering, enlightenment, achieving harmony with the cosmos). Spirituality in these traditions is often not separate from the philosophical system itself. Philosophy of Religion: This is a field that directly examines religious and spiritual concepts such as the nature of God, the justification of faith, the nature of religious experience, the problem of evil, and the afterlife, using philosophical methods.`
      }
    ]
  },
  {
    id: 'Ethics/Politics', // Matches IdeologicalGroups key
    name: 'Philosophy of Ethics and Politics',
    description: `The philosophy of ethics (also called moral philosophy) is a branch of philosophy that examines what is morally good and bad, right and wrong, and investigates the nature of values, duties, and virtues. It asks fundamental questions about how we ought to live, what decisions to make, and on what basis to evaluate actions and character. Political philosophy is a branch of philosophy that examines fundamental questions about the state, government, justice, law, liberty, equality, and the rights and duties of citizens. It seeks to understand how society should be organized, what the foundations of legitimate authority are, and what principles should guide political life.`,
    image: ethicsPoliticsImg, // Paveikslėlis pridėtas
    subSections: [
      {
        title: 'Main Areas of Ethics',
        content: `Metaethics: This area examines the nature of ethics itself. It asks what moral statements mean (e.g., "killing is wrong"), whether moral truths exist objectively or are subjective, what the basis of moral judgments is (reason, feelings, God's will), and what the nature of moral values is. Normative Ethics: This area seeks to formulate general moral principles or rules that dictate how we should act. The main theories of normative ethics include: Deontology: Argues that the morality of actions depends on their adherence to certain duties or rules, regardless of consequences (e.g., the ethics of Immanuel Kant). Consequentialism: Argues that the morality of actions depends on their consequences (e.g., utilitarianism, which holds that the right action is the one that produces the greatest happiness for the greatest number of people). Virtue Ethics: Emphasizes the cultivation of character and virtues (e.g., courage, justice, wisdom), rather than just adhering to rules or evaluating consequences (e.g., the ethics of Aristotle). Applied Ethics: This area examines specific moral problems and dilemmas in various areas of life, applying insights from metaethics and normative ethics (e.g., bioethics, business ethics, environmental ethics).`
      },
      {
        title: 'History and Notable Representatives of Ethics',
        content: `Ethical questions have been raised since the very beginning of philosophy. Antiquity: In ancient Greece, Socrates asked questions about virtue, Plato examined the nature of justice in the "Republic," and Aristotle in his "Nicomachean Ethics" developed virtue ethics, arguing that the highest good is eudaimonia (flourishing, living well), achieved by cultivating virtues. Later ancient schools, such as the Stoics and Epicureans, offered different paths to pursuing the good and happiness. Middle Ages: In medieval philosophy, ethics was closely linked to theology. Thinkers such as Augustine and Thomas Aquinas combined ideas from ancient philosophy with Christian teaching, examining God's commands, virtues, and eternal law. Modern Period: During this period, new theories of ethics emerged. Immanuel Kant formulated deontological ethics, based on the concept of reason and duty (the categorical imperative). British empiricists (e.g., David Hume) emphasized the role of feelings and sympathy in morality. Utilitarianism (Jeremy Bentham, John Stuart Mill) proposed basing ethics on utility and happiness. Contemporary Philosophy: In the 20th century and beyond, the philosophy of ethics became even more specialized, with metaethics emerging as a separate field, applied ethics being developed, and interest in virtue ethics reviving.`
      },
      {
        title: 'Main Areas of Political Philosophy',
        content: `Nature and Origin of the State: Questions are examined regarding why the state exists, what its purpose is, whether it arose naturally or due to a social contract. Justice: One of the most important themes in political philosophy. It is investigated what justice is, how resources, rights, and duties should be distributed in society, and the concept of equality. Authority and Legitimacy: The analysis of what gives authority legitimacy, what are the different forms of government (democracy, aristocracy, monarchy, etc.), and the basis for citizens' obedience to the state. Liberty and Rights: The nature of liberty is examined (negative liberty – freedom from something; positive liberty – freedom to do something), individual rights and their relationship with state authority and the collective good. Rule of Law: The nature of laws, their connection with morality and justice, and the role of law in society are analyzed.`
      },
      {
        title: 'History and Notable Representatives of Political Philosophy',
        content: `The origins of political philosophy also lie in antiquity. Antiquity: Plato in his "Republic" described an ideal state ruled by philosopher-kings and examined the structure of justice. Aristotle in his "Politics" analyzed different forms of government and argued that man is a "political animal" who can realize his nature only in a community (polis). Middle Ages: Political philosophy was influenced by religion. Augustine examined the relationship between the "City of God" and the "Earthly City." Thomas Aquinas developed the theory of natural law and examined the foundations of legitimate authority. Modern Period: This period saw the emergence of the foundations of modern political philosophy. Niccolò Machiavelli analyzed the realistic nature of politics. Thomas Hobbes, John Locke, and Jean-Jacques Rousseau developed social contract theories explaining the origin of the state and the basis of authority, but offered different interpretations of the contract and models of the state. Montesquieu examined the principle of the separation of powers. Contemporary Philosophy: In the 20th century and beyond, political philosophy has examined topics such as liberalism, socialism, anarchism, feminism, multiculturalism, and global justice. Important contemporary political philosophers include John Rawls (justice as fairness), Robert Nozick (minimal state), and Hannah Arendt (power, public space).`
      },
      {
        title: 'The Relationship Between Ethics and Politics',
        content: `Ethics and politics are closely related. Political philosophy often relies on ethical principles in determining what form of government is just or what rights citizens are entitled to. For example, political ideas about liberty and equality are based on ethical considerations about human worth and dignity. Conversely, the political system can greatly influence an individual's ability to live ethically. Discussions about civic duty and the pursuit of justice in society are at the intersection of ethics and politics. Despite their close connection, ethics primarily focuses on individual behavior and moral decisions, while politics focuses on the organization of society and the structures of power.`
      }
    ]
  },
  {
    id: 'Stoics', // Matches IdeologicalGroups key
    name: 'Philosophy of Stoicism',
    description: `Stoicism is a school of Hellenistic philosophy founded in Athens around 300 BCE by Zeno of Citium. It is a practical philosophy that offers ethical guidelines on how to achieve eudaimonia (flourishing, living well) through the practice of virtue and living in harmony with nature. The Stoics taught that while we cannot control external events, we can control our reactions and attitudes towards them.`,
    image: stoicismImg, // Paveikslėlis pridėtas
    subSections: [
      {
        title: 'Ethics',
        content: `This is the most important part of Stoicism. Virtue is the only good: Stoics argued that only virtue (wisdom, justice, courage, and temperance) is truly good, while everything else (wealth, health, reputation, pleasures) is adiaphora (indifferent, neutral), having only instrumental value. Happiness is achieved by living virtuously, regardless of external circumstances. Living in accordance with nature: This means living according to reason (logos), which governs the universe and is part of our nature. This also includes accepting what happens, understanding that everything occurs according to cosmic order and determinism. Control of emotions: Stoics sought not to suppress emotions but to cultivate the ability to manage destructive emotions (passions) such as fear, anger, excessive joy, or sadness, based on reason and correct judgments.`
      },
      {
        title: 'Physics',
        content: `Stoic physics was materialistic and deterministic. They believed that the universe is a single, material entity permeated by the divine reason or Logos, which determines all events. Everything happens according to the law of cause and effect.`
      },
      {
        title: 'Logic',
        content: `Stoics developed logic as a tool for correct thinking and avoiding errors. They examined forms of reasoning, the nature of language, and the process of knowledge.`
      },
      {
        title: 'History and Notable Representatives of Stoicism',
        content: `The history of Stoicism is divided into three main periods: Early Stoa (c. 300 – c. 1st century BCE): Founded by Zeno of Citium, followed by Cleanthes and Chrysippus. The basic principles of Stoicism were formulated during this period. Middle Stoa (2nd – 1st century BCE): Panaetius and Posidonius. They contributed to the spread of Stoicism in Rome and placed more emphasis on the human aspects. Late Stoa (1st – 2nd century CE): Epictetus, Seneca, and Marcus Aurelius. Thinkers of this period primarily focused on the practical application of Stoic ethics in daily life. Their works are the best preserved and most well-known today. Notable Stoic Philosophers: Zeno of Citium: The founder of the Stoic school. Epictetus: A former slave who became an influential philosopher. His teachings, recorded in Arrian's works "Discourses" and "Enchiridion," emphasize what we can control (our thoughts and actions) and what we cannot (external events). Seneca the Younger: Roman playwright, statesman, and philosopher. His "Letters to Lucilius" are a valuable source on Stoic ethics. Marcus Aurelius: Roman Emperor and philosopher. His personal reflections "Meditations" are one of the most popular Stoic texts, examining questions of virtue, duty, and the meaning of life. Stoicism had a significant influence on Western philosophy and thought, particularly in the field of ethics, and remains popular due to its practicality and focus on cultivating resilience.`
      }
    ]
  }
];

