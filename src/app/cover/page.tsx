export default function CoverLetter() {
    const getCurrentDate = () => {
        return new Intl.DateTimeFormat('en-AU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).format(new Date());
    };

    return (
        <div className="w-4/5 mx-auto p-2 mt-10 space-y-5 font-Calibri text-gray-700">
            <ul>
                <li>{getCurrentDate()}</li>
                <li>Ramesh Khadka</li>
                <li>(61) 0450902056</li>
                <li>
                    <a href="mailto:eaxle07@gmail.com" className="text-blue-600 underline">
                        eaxle07@gmail.com
                    </a>
                </li>
                <li>1/9 Mannion Street, Katherine NT, 0850</li>
                <li>
                    <a href="https://www.linkedin.com/in/ramesh-khadka-142772b4/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        LinkedIn Profile
                    </a>
                </li>
            </ul>

            <p className="text-center text-lg">
                <strong>RE:</strong> React Developer
            </p>

            <span>Dear Hiring Manager,</span>

            <section className="space-y-2">
                <p>
                    I am excited to apply for the React Developer position at your company. With a strong background in front-end development and a passion for creating seamless user experiences, I am confident in my ability to contribute to your team.
                </p>

                <p>
                    During my tenure at SuvidhaTech from 2015 to 2018, I honed my skills in <strong>ReactJS, JavaScript, TypeScript, CSS, MySQL, and Git</strong>, developing responsive web applications that enhanced user engagement. Currently, as an <strong>ICT Officer</strong> at Katherine High School, I apply my technical knowledge to support various IT needs, including data analysis, report creation, and system troubleshooting.
                </p>

                <p>
                    Your company&apos;s commitment to innovation and user-centric design resonates with my own values. My collaborative approach and problem-solving skills would make me a valuable addition to your team. I am eager to leverage my expertise to create applications that exceed user expectations.
                </p>
            </section>

            <p>Thank you for considering my application. I look forward to discussing how my skills align with your team&apos;s goals.</p>

            <p>Sincerely,</p>
            <p>Ramesh Khadka</p>
            <p>
                <a href="mailto:eaxle07@gmail.com" className="text-blue-600 underline">
                    eaxle07@gmail.com
                </a>
            </p>
        </div>
    );
}
