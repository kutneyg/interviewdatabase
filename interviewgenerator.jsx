import React, { useState } from 'react';

// --- DATA SOURCE ---

const standardQuestions = {
    "1": "What motivated you to apply to your college?",
    "2": "What strategies do you use to engage people or groups who are new to you?",
    "3": "Describe your ideal college experience.",
    "4": "What's a current event that interests you and why?",
    "5": "How do you approach learning new technologies or skills?",
    "6": "What's your strategy for balancing academics and personal life?",
    "7": "Tell me about a time you had to work under pressure.",
    "8": "What do you consider your most unique quality?",
    "9": "How do you handle setbacks or disappointments?",
    "10": "What's the most challenging course you've taken and why?",
    "11": "Tell me about yourself.",
    "12": "What are your academic strengths and weaknesses?",
    "13": "Why did you choose your major?",
    "14": "Describe a time when you had to work with a difficult team member. How did you handle it?",
    "15": "What's your favorite book and why?",
    "16": "How do you handle stress and pressure?",
    "17": "Where do you see yourself in five years?",
    "18": "Tell me about a time you demonstrated leadership skills.",
    "19": "What extracurricular activities are you involved in and why?",
    "20": "How do you prioritize your time when you have multiple deadlines?",
    "21": "What's your biggest accomplishment so far?",
    "22": "Describe a situation where you had to adapt to a new environment quickly.",
    "23": "How do you stay organized?",
    "24": "Tell me about a time you failed. What did you learn from it?",
    "25": "What is a trait or characteristic you admire and why?",
    "26": "How do you define success?",
    "27": "Describe a situation where you had to resolve a conflict with a peer.",
    "28": "What's your favorite subject and why?",
    "29": "How do you handle constructive criticism?",
    "30": "Tell me about a time you went above and beyond for a project or assignment.",
    "31": "What's your approach to problem-solving?",
    "32": "How do you stay motivated during challenging times?",
    "33": "Describe your ideal learning environment.",
    "34": "Tell me about a time you had to make an unpopular decision.",
    "35": "How do you contribute to your community?",
    "36": "What's the most difficult decision you've made recently?",
    "37": "How do you handle disagreements with authority figures?",
    "38": "What's your favorite way to relax and recharge?",
    "39": "Can you describe a time you had to pivot your strategy when an unexpected obstacle disrupted your schedule?",
    "40": "When you encounter conflicting information from different sources, what steps do you take to verify the facts before forming an opinion?",
    "41": "What's your greatest passion and how do you pursue it?",
    "42": "How do you plan to finance your education?",
    "43": "Tell me about a time you had to think creatively to solve a problem.",
    "44": "What do you hope to gain from college?",
    "45": "Describe a situation where you had to persuade someone to see things your way.",
    "46": "How would your friends describe you?",
    "47": "How do you approach networking and building professional relationships?",
    "48": "How do you ensure that the lessons you learn from a mistake are integrated into your future work habits?",
    "49": "What do you think will be your biggest challenge in this role?",
    "50": "How do you plan to make a positive impact on campus?",
    "51": "In what ways, if any, does your community contribute to your sense of fulfillment?",
    "52": "Describe a time you had to choose between two equally good options. What was your tie-breaking criteria?",
    "53": "Describe a recent disagreement and how you handled it.",
    "54": "How do you recognize when you are reaching a point of burnout, and what proactive steps do you take?",
    "55": "Tell me about a tool or system (digital or manual) you rely on to manage your daily workflow.",
    "56": "How do you stay current with trends within your field?",
    "57": "Describe a time you had to complete a task with very little direction. How did you determine your first steps?",
    "58": "What's a skill you'd like to improve and why?",
    "59": "How do you approach diversity and inclusion in your daily life?",
    "60": "Tell me about a time you had to step out of your comfort zone.",
    "61": "What is a topic you’ve taught yourself recently, and what drew you to it?",
    "62": "What types of decisions do you find most difficult to make and why?",
    "63": "Describe a time you saw a problem that others ignored and took the initiative to fix it.",
    "64": "How do you plan to balance your personal growth with the rigors of this role?",
    "65": "Give an example of a time you had to explain a complex concept to someone who was completely unfamiliar with it.",
    "66": "If we were to ask a former supervisor or teacher for one area where you could grow, what would they say?"
};

const set2Questions = {
    "1": "Tell me about a time you had to ask a professor or advisor for help.",
    "2": "How would you explain the value of a liberal arts education to someone who is focused solely on pre-professional training?",
    "3": "Describe a time you received feedback that surprised you. How did you react?",
    "4": "What role do you naturally assume when placed in a collaborative group project?",
    "5": "Tell me about a time you had to learn a new digital tool or software quickly to complete an assignment.",
    "6": "How do you evaluate which campus organizations or clubs are worth your time commitment?",
    "7": "Describe a time you had to present complex information to an audience of your peers.",
    "8": "What is a professional or academic risk you’ve taken, and what was the outcome?",
    "9": "Tell me about a time you stepped in to help a classmate who was struggling.",
    "10": "How do you go about setting actionable, long-term goals for yourself?",
    "11": "Describe a time you noticed a process in a club or job was inefficient and suggested a way to improve it.",
    "12": "How do you balance advocating for your own ideas while making sure others' voices are heard?",
    "13": "Tell me about a time you had to meet a strict deadline but lacked the ideal resources.",
    "14": "What is the most important lesson you’ve learned from a mentor or role model?",
    "15": "Describe a time you successfully managed a multifaceted project from start to finish.",
    "16": "Tell me about a time you had to piece together fragmented information to complete a project.",
    "17": "Describe a time your initial solution to a problem didn’t work. What was your next step?",
    "18": "What strategies do you use to push through when an assignment becomes tedious or repetitive?",
    "19": "Describe a time you had to build trust with someone quickly.",
    "20": "How do you evaluate whether a personal project or campus event was truly successful?",
    "21": "Tell me about a time you had to adjust your communication style to effectively connect with someone.",
    "22": "What steps do you take to ensure everyone in a study group feels included?",
    "23": "Describe a time you had to follow a guideline or rubric that you didn't necessarily agree with.",
    "24": "In what ways has your liberal arts background prepared you to think critically about complex, real-world problems?",
    "25": "Tell me about a time you had to apologize for a professional or academic oversight.",
    "26": "What do you do when you realize you won't be able to fulfill a commitment you made?",
    "27": "Can you share an example of how taking a class completely outside your major changed your perspective on a core issue?",
    "28": "How do you keep yourself on track when managing long-term, multi-month research projects?",
    "29": "Tell me about a time you advocated for a cause or an idea you strongly believe in on campus.",
    "30": "What is the most constructive piece of criticism you’ve ever received, and how did you apply it?",
    "31": "Describe a time you took the lead on a project simply because no one else stepped up.",
    "32": "How do you handle working under a supervisor or professor who is highly demanding?",
    "33": "Tell me about a time you had to say \"no\" to a request in order to protect your priorities.",
    "34": "Describe a specific moment when you felt genuinely proud of your academic journey.",
    "35": "How do you approach building a professional network from scratch at a career fair or networking event?",
    "36": "Tell me about a time you had to compromise on a preference to move a team project forward.",
    "37": "What strategies do you use to stay focused during long periods of independent study?",
    "38": "How does the interdisciplinary nature of the liberal arts help you adapt to unexpected challenges?",
    "39": "How have you managed a significant life transition, such as moving from high school to college?",
    "40": "Tell me about a time you felt overwhelmed by your workload. What immediate steps did you take?",
    "41": "What is a hobby or interest you have that has surprisingly improved your academic skills?",
    "42": "Describe a time you had to rely entirely on written communication (like email) to resolve a complex issue.",
    "43": "Describe a time you motivated an unengaged group member to contribute to a shared goal.",
    "44": "Tell me about a time you challenged the status quo in a student club or organization.",
    "45": "What do you consider the most valuable non-academic skill you've developed during your time in college?",
    "46": "Describe a time you successfully navigated a culturally or ideologically diverse environment.",
    "47": "How do you maintain your enthusiasm for your major when taking difficult foundational or prerequisite courses?",
    "48": "Tell me about a time you discovered a new passion or interest by accident.",
    "49": "What role does community service or volunteering play in your overall career aspirations?",
    "50": "Describe a time you had to self-advocate for an opportunity, such as an internship or leadership role.",
    "51": "How do you track your personal or professional growth from one term to the next?",
    "52": "Tell me about a time you successfully managed a tight budget for a student organization event.",
    "53": "What do you do when you disagree with the overall direction your project group is taking?",
    "54": "Describe a time you anticipated a problem before it happened and took preventative action.",
    "55": "Describe a time when drawing connections between two completely different academic disciplines helped you solve a problem.",
    "56": "Tell me about a time you inspired someone else to get involved in a project or campus cause.",
    "57": "What concrete strategies do you use to overcome procrastination when starting a daunting paper?",
    "58": "Describe a time you had to radically adapt your schedule to accommodate an unexpected emergency.",
    "59": "How do you foster a positive environment when group morale is low during midterm season?",
    "60": "Tell me about a time you received recognition for your work. How did it affect your future performance?",
    "61": "What is a common misconception people have about your major or field of study, and how do you address it?",
    "62": "Describe a time you had to translate a highly technical or academic concept for a general audience.",
    "63": "How do you go about finding a mentor or seeking advice from working professionals?",
    "64": "Tell me about a time you effectively used data or research to back up an argument in a discussion.",
    "65": "What is one habit you are currently trying to build (or break) to improve your academic performance?",
    "66": "Describe a time you felt you made a lasting, positive impact on a peer's college experience."
};

const advancedQuestions = {
    "1-1": "Analyze a current trend in your intended field of study and its potential impact on future career opportunities.",
    "1-2": "How would you design a research study to address a current issue in your academic field?",
    "1-3": "Discuss the ethical implications of a recent technological advancement in your area of interest.",
    "1-4": "How do you envision integrating interdisciplinary approaches in your chosen major?",
    "1-5": "Describe a complex problem in your field and propose an innovative solution.",
    "1-6": "How do you plan to leverage your college education to address a global challenge?",
    "2-1": "Critique a popular theory or model in your field of study. What are its strengths and limitations?",
    "2-2": "How would you apply concepts from your major to solve a real-world problem in a developing country?",
    "2-3": "Discuss the potential long-term consequences of a current policy related to your field of study.",
    "2-4": "How do you plan to stay ahead of rapid changes and advancements in your chosen industry?",
    "2-5": "Analyze the intersection of your field with another seemingly unrelated discipline.",
    "2-6": "How would you design a course that addresses a gap in the current curriculum of your intended major?",
    "3-1": "Discuss a controversial topic in your field and present arguments from multiple perspectives.",
    "3-2": "How would you approach writing a grant proposal for a research project in your area of interest?",
    "3-3": "Describe how you would develop a start-up based on an innovative idea related to your studies.",
    "3-4": "How do you envision technology changing the landscape of your field in the next decade?",
    "3-5": "Discuss the challenges of implementing theoretical knowledge from your major in practical scenarios.",
    "3-6": "How would you design an experiment to test a novel hypothesis in your field?",
    "4-1": "Analyze the potential societal impacts of a groundbreaking discovery in your field of study.",
    "4-2": "How would you approach teaching a complex concept from your major to a group of high school students?",
    "4-3": "Discuss the role of big data and analytics in shaping the future of your chosen field.",
    "4-4": "How do you plan to balance specialization with the need for broad, interdisciplinary knowledge?",
    "4-5": "Describe a situation where ethics and advancement in your field might come into conflict.",
    "4-6": "How would you design a mentorship program for first-year students in your major?",
    "5-1": "Discuss the challenges of global collaboration in research projects related to your field.",
    "5-2": "How would you approach writing a literature review on a cutting-edge topic in your area of study?",
    "5-3": "Analyze the potential economic impacts of a recent development in your field.",
    "5-4": "How do you envision applying principles of sustainability to your chosen area of study?",
    "5-5": "Discuss the challenges and opportunities of remote work or virtual collaboration in your field.",
    "5-6": "How would you design a public engagement campaign to educate people about a complex issue in your field?",
    "6-1": "Analyze the role of artificial intelligence and machine learning in advancing your field of study.",
    "6-2": "How would you approach developing a new theory or model in your area of interest?",
    "6-3": "Discuss the challenges of translating academic research into practical applications in your field.",
    "6-4": "How do you plan to contribute to diversity and inclusion initiatives within your chosen discipline?",
    "6-5": "Describe how you would organize an international conference on a cutting-edge topic in your field.",
    "6-6": "How would you design a cross-cultural research project related to your area of study?"
};

const App = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [activeSet, setActiveSet] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setResult(null);

        const trimmedInput = input.trim();

        if (!trimmedInput) return;

        // Check Advanced First (Available globally)
        if (advancedQuestions[trimmedInput]) {
            setResult({
                text: advancedQuestions[trimmedInput],
                category: "Advanced Interview Question",
                id: trimmedInput,
                type: 'advanced'
            });
            return;
        }

        // Check Active Standard Set
        const activeQuestions = activeSet === 1 ? standardQuestions : set2Questions;
        
        if (activeQuestions[trimmedInput]) {
            setResult({
                text: activeQuestions[trimmedInput],
                category: `Set ${activeSet} Interview Question`,
                id: trimmedInput,
                type: `set${activeSet}`
            });
            return;
        }

        // Not found
        setError(`Question not found. Please check your dice number (e.g., 8, 35) or advanced code (e.g., 3-5).`);
    };

    const handleClear = () => {
        setInput("");
        setResult(null);
        setError("");
        const inputEl = document.getElementById('question-input');
        if (inputEl) inputEl.focus();
    };

    const getColors = (type) => {
        if (type === 'advanced') return 'bg-purple-100 text-purple-800';
        if (type === 'set2') return 'bg-indigo-100 text-indigo-800';
        return 'bg-teal-100 text-teal-800'; // Set 1
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <style>{`
                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
            
            {/* Header */}
            <div className="w-full max-w-4xl text-center mb-8">
                <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight sm:text-5xl mb-4">
                    Grace's Interview Question Database
                </h1>
                <p className="text-slate-500 text-lg">
                    Select your question pool, then enter the result of your dice roll.
                </p>
            </div>

            {/* Set Toggle Switch */}
            <div className="flex justify-center mb-10">
                <div className="bg-slate-200 p-1 rounded-xl flex shadow-inner">
                    <button
                        type="button"
                        onClick={() => { setActiveSet(1); setResult(null); setInput(""); setError(""); }}
                        className={`px-8 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 ${activeSet === 1 ? 'bg-white text-teal-700 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Set 1 (Original)
                    </button>
                    <button
                        type="button"
                        onClick={() => { setActiveSet(2); setResult(null); setInput(""); setError(""); }}
                        className={`px-8 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 ${activeSet === 2 ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Set 2 (New)
                    </button>
                </div>
            </div>

            {/* Input Section */}
            <div className="w-full max-w-lg mb-10">
                <form onSubmit={handleSubmit} className="relative flex items-center">
                    <input
                        id="question-input"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="e.g. 8, 35, or 3-5"
                        className={`block w-full rounded-2xl border-2 px-6 py-4 text-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 shadow-sm transition-all text-center font-mono font-bold ${
                            activeSet === 1 
                            ? 'border-slate-300 focus:border-teal-500 focus:ring-teal-100' 
                            : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-100'
                        }`}
                        autoComplete="off"
                    />
                    <button
                        type="submit"
                        className={`absolute right-2 top-2 bottom-2 text-white px-8 py-2 rounded-xl font-bold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors shadow-md ${
                            activeSet === 1 
                            ? 'bg-teal-600 hover:bg-teal-700 focus:ring-teal-500' 
                            : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
                        }`}
                    >
                        Enter
                    </button>
                </form>
                <div className="text-center mt-4 text-sm font-medium text-slate-400">
                    Currently searching: <span className={activeSet === 1 ? 'text-teal-600' : 'text-indigo-600'}>Set {activeSet}</span> & Advanced Questions
                </div>
            </div>

            {/* Result Display Area */}
            <div className="w-full max-w-6xl flex-grow flex flex-col items-center justify-start">
                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl w-full max-w-2xl animate-fade-in shadow-sm">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-red-800">{error}</p>
                            </div>
                        </div>
                    </div>
                )}

                {result && (
                    <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden animate-fade-in border border-slate-100">
                        {/* Card Header / Category */}
                        <div className={`px-8 py-4 border-b border-slate-100 flex justify-between items-center ${getColors(result.type)}`}>
                            <span className="uppercase tracking-wider text-sm font-extrabold">
                                {result.category}
                            </span>
                            <span className="font-mono font-bold text-lg opacity-80">
                                #{result.id}
                            </span>
                        </div>

                        {/* Question Content */}
                        <div className="p-10 md:p-16 lg:p-20 text-center flex items-center justify-center min-h-[300px]">
                            <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                                {result.text}
                            </p>
                        </div>
                        
                        {/* Footer / Reset */}
                        <div className="bg-slate-50 px-8 py-5 flex justify-center border-t border-slate-100">
                            <button 
                                onClick={handleClear}
                                className="text-slate-500 hover:text-slate-800 text-sm font-bold transition-colors flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                Clear and roll again
                            </button>
                        </div>
                    </div>
                )}
                
                {!result && !error && (
                    <div className="flex flex-col items-center justify-center h-64 text-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mb-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        <p className="text-xl font-medium tracking-wide">Ready for the next candidate.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;