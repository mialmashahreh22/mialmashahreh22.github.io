const writeups = [
  {
    title: "Email Lifecycle Business Logic Bug",
    severity: "Medium",
    text: "A deleted account email remains locked, blocking signup or reinvitation.",
    repo: "email-lifecycle-business-logic-bug"
  },
  {
    title: "Password Reset Whitespace Bug",
    severity: "Medium",
    text: "Password reset accepts leading whitespace, but login handles it differently and causes lockout.",
    repo: "password-reset-whitespace-bug"
  },
  {
    title: "Unauthorized File Deletion IDOR",
    severity: "High",
    text: "A destructive file action is possible without proper authentication and ownership checks.",
    repo: "unauthorized-file-deletion-idor"
  },
  {
    title: "Ticket Reservation Logic Bug",
    severity: "High",
    text: "Unpaid ticket reservations stay locked too long and can block real buyers.",
    repo: "ticket-reservation-business-logic-bug"
  },
  {
    title: "Unsubscribe Endpoint IDOR",
    severity: "High",
    text: "Changing a raw mail ID can unsubscribe another user and expose private data.",
    repo: "unsubscribe-endpoint-idor"
  },
  {
    title: "Reusable Email Verification Code",
    severity: "Medium",
    text: "Old verification codes remain valid after requesting a new one.",
    repo: "reusable-email-verification-code-bug"
  },
  {
    title: "Unauthenticated API Token Exposure",
    severity: "Critical",
    text: "A credentials endpoint returns token-like data to logged-out users.",
    repo: "unauthenticated-api-token-exposure"
  }
];

const tools = [
  {
    title: "Static Analysis Basics",
    tag: "Guide",
    text: "Semgrep, YARA, secret scanning, secure code review, and Code Scanner Quest.",
    url: "https://github.com/mialmashahreh22/static-analysis-basics-for-cybersecurity"
  },
  {
    title: "Networking Basics",
    tag: "Guide",
    text: "Networking fundamentals for cybersecurity with Network Quest.",
    url: "https://github.com/mialmashahreh22/networking-basics-for-cybersecurity"
  },
  {
    title: "Windows Filesystem Guide",
    tag: "Guide",
    text: "Windows directories, permissions, PowerShell, and investigation paths.",
    url: "https://github.com/mialmashahreh22/windows-filesystem-guide"
  },
  {
    title: "Linux Filesystem Guide",
    tag: "Guide",
    text: "Linux directories, permissions, commands, and admin fundamentals.",
    url: "https://github.com/mialmashahreh22/linux-filesystem-guide"
  }
];

function writeupCard(item) {
  const repoUrl = `https://github.com/mialmashahreh22/${item.repo}`;
  const labUrl = `https://mialmashahreh22.github.io/${item.repo}/labs/ctf-game/`;
  return `
    <article class="card">
      <span class="tag severity">${item.severity}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <div class="card-links">
        <a href="${repoUrl}" target="_blank" rel="noreferrer">Report</a>
        <a href="${labUrl}" target="_blank" rel="noreferrer">Simulation</a>
      </div>
    </article>
  `;
}

function toolCard(item) {
  return `
    <article class="card">
      <span class="tag">${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <div class="card-links">
        <a href="${item.url}" target="_blank" rel="noreferrer">Open project</a>
      </div>
    </article>
  `;
}

document.querySelector("#writeupCards").innerHTML = writeups.map(writeupCard).join("");
document.querySelector("#toolCards").innerHTML = tools.map(toolCard).join("");
