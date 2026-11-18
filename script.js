const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navigation.classList.toggle('open', !open);
});

const demos = {
  source: { time: '08:30', title: 'Start with the positions that need candidates.', copy: 'The attention queue brings urgent searches and overdue next actions to the top of the day.', metrics: [['Open positions','12','Example workspace'],['Need CVs','4','Ready for sourcing'],['Follow-ups','3','Due today']], row: ['Prioritise an active vacancy','Next action and owner stay visible','Today'] },
  submit: { time: '11:15', title: 'Submit candidates without losing the thread.', copy: 'Candidate records, consent, CVs and submissions stay connected to the right position.', metrics: [['Candidates','48','Example workspace'],['Submitted','6','Across active roles'],['Drafts','2','Ready for review']], row: ['Review a candidate submission','Position and client remain connected','Ready'] },
  interview: { time: '14:00', title: 'Turn progress into a scheduled interview.', copy: 'Interview details, candidate communication and Outlook calendar actions live together.', metrics: [['Interviews','3','Scheduled ahead'],['Unscheduled','1','Needs a date'],['Feedback','2','Follow-ups due']], row: ['Confirm interview details','Email and calendar actions available','14:00'] },
  place: { time: '16:45', title: 'Carry the win through to the fee.', copy: 'Record the placement, calculate the fee and follow the invoice from raised to paid.', metrics: [['Placements','2','Example month'],['Invoiced','$8,400','Example value'],['Outstanding','$3,200','Example value']], row: ['Review the placement invoice','Fee and payment status stay visible','Open'] }
};

document.querySelectorAll('.day-tab').forEach((button) => button.addEventListener('click', () => {
  const demo = demos[button.dataset.demo];
  document.querySelectorAll('.day-tab').forEach((item) => { item.classList.remove('active'); item.setAttribute('aria-selected','false'); });
  button.classList.add('active'); button.setAttribute('aria-selected','true');
  document.querySelector('#demo-time').textContent = demo.time;
  document.querySelector('#demo-title').textContent = demo.title;
  document.querySelector('#demo-copy').textContent = demo.copy;
  document.querySelector('#demo-grid').innerHTML = demo.metrics.map(([label,value,note]) => `<div><span>${label}</span><strong>${value}</strong><small>${note}</small></div>`).join('');
  const row = document.querySelector('.demo-queue');
  row.innerHTML = `<span>01</span><div><strong>${demo.row[0]}</strong><small>${demo.row[1]}</small></div><b>${demo.row[2]}</b>`;
}));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('revealed');
}), { threshold: .12 });
document.querySelectorAll('section > *, .workflow-grid article, .pricing-grid article').forEach((node) => observer.observe(node));
