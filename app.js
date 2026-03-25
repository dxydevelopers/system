/* ============================================
   Sitemendr OS - JavaScript
   ============================================ */

// Data Storage Keys
const STORAGE_KEYS = {
    TASKS: 'sitemendr_tasks',
    TIMETABLE: 'sitemendr_timetable',
    TRANSACTIONS: 'sitemendr_transactions',
    FITNESS: 'sitemendr_fitness',
    STREAK: 'sitemendr_streak',
    TRADING_GOAL: 'sitemendr_trading_goal',
    SAVINGS_GOAL: 'sitemendr_savings_goal',
    EDITABLE_DATA: 'sitemendr_editable_data',
    CALENDAR_DATA: 'sitemendr_calendar_data'
};

// Default Timetable Data
const DEFAULT_TIMETABLE = {
    monday: [
        { id: 1, start: '11:00', end: '11:20', block: 'Wake up + prayer 🙏', completed: false },
        { id: 2, start: '11:20', end: '11:50', block: 'Admin & planning 📋', completed: false },
        { id: 3, start: '11:50', end: '12:50', block: 'Fitness 💪', completed: false },
        { id: 4, start: '12:50', end: '13:30', block: 'Shower + cook + eat 🍳', completed: false },
        { id: 5, start: '13:30', end: '14:10', block: 'Class', completed: false },
        { id: 6, start: '14:10', end: '15:40', block: 'Trading 📈', completed: false },
        { id: 7, start: '15:40', end: '18:15', block: 'SaaS development 💻', completed: false },
        { id: 8, start: '18:15', end: '18:45', block: 'Mental health 🎵', completed: false },
        { id: 9, start: '18:45', end: '19:15', block: 'Shower + eat meal 2 🚿', completed: false },
        { id: 10, start: '19:15', end: '24:00', block: 'GroupMe startups + Ea bot Checks', completed: false },
        { id: 11, start: '24:00', end: '24:30', block: 'Break + snack 📋', completed: false },
        { id: 12, start: '24:30', end: '04:15', block: 'Groupme', completed: false },
        { id: 13, start: '04:15', end: '04:30', block: 'Money Review 💰', completed: false },
        { id: 14, start: '04:30', end: '', block: 'Wrap up + notebook 📓', completed: false },
        { id: 15, start: '06:00', end: '11:00', block: 'Sleep', completed: false }
    ],
    tuesday: [
        { id: 1, start: '11:00', end: '11:20', block: 'Wake up + prayer 🙏', completed: false },
        { id: 2, start: '11:20', end: '11:50', block: 'Admin & planning 📋', completed: false },
        { id: 3, start: '11:50', end: '12:50', block: 'Fitness 💪', completed: false },
        { id: 4, start: '12:50', end: '13:30', block: 'Shower + cook + eat 🍳', completed: false },
        { id: 5, start: '13:30', end: '14:10', block: 'Spanish Class', completed: false },
        { id: 6, start: '14:10', end: '15:40', block: 'Trading 📈', completed: false },
        { id: 7, start: '15:40', end: '18:15', block: 'SaaS development 💻', completed: false },
        { id: 8, start: '18:15', end: '18:45', block: 'Shower 🚿', completed: false },
        { id: 9, start: '18:45', end: '19:30', block: 'Errands 🛒 + Mental health 🎵', completed: false },
        { id: 10, start: '19:30', end: '20:30', block: 'Meal 2 prep+eat', completed: false },
        { id: 11, start: '20:30', end: '24:00', block: 'GroupMe startups + Ea bot Checks', completed: false },
        { id: 12, start: '24:00', end: '24:30', block: 'Break + snack 📋', completed: false },
        { id: 13, start: '24:30', end: '04:15', block: 'Groupme', completed: false },
        { id: 14, start: '04:15', end: '04:30', block: 'Money Review 💰', completed: false },
        { id: 15, start: '04:30', end: '', block: 'Wrap up + notebook 📓', completed: false },
        { id: 16, start: '06:00', end: '11:00', block: 'Sleep', completed: false }
    ],
    wednesday: [
        { id: 1, start: '11:00', end: '11:20', block: 'Wake up + prayer 🙏', completed: false },
        { id: 2, start: '11:20', end: '11:50', block: 'Admin & planning 📋', completed: false },
        { id: 3, start: '11:50', end: '12:50', block: 'Fitness 💪', completed: false },
        { id: 4, start: '12:50', end: '13:30', block: 'Shower + cook + eat 🍳', completed: false },
        { id: 5, start: '13:30', end: '14:10', block: 'Laundry & Cleaning', completed: false },
        { id: 6, start: '14:10', end: '15:40', block: 'Trading 📈', completed: false },
        { id: 7, start: '15:40', end: '18:15', block: 'SaaS development 💻', completed: false },
        { id: 8, start: '18:15', end: '18:45', block: 'Class - Tools', completed: false },
        { id: 9, start: '18:45', end: '19:15', block: 'Shower + eat meal 2 🚿', completed: false },
        { id: 10, start: '19:15', end: '24:00', block: 'GroupMe startups + Ea bot Checks', completed: false },
        { id: 11, start: '24:00', end: '24:30', block: 'Break + snack 📋', completed: false },
        { id: 12, start: '24:30', end: '04:15', block: 'Groupme', completed: false },
        { id: 13, start: '04:15', end: '04:30', block: 'Money Review 💰', completed: false },
        { id: 14, start: '04:30', end: '', block: 'Wrap up + notebook 📓', completed: false },
        { id: 15, start: '06:00', end: '11:00', block: 'Sleep', completed: false }
    ],
    thursday: [
        { id: 1, start: '11:00', end: '11:20', block: 'Wake up + prayer 🙏', completed: false },
        { id: 2, start: '11:20', end: '11:50', block: 'Admin & planning 📋', completed: false },
        { id: 3, start: '11:50', end: '12:50', block: 'Fitness 💪', completed: false },
        { id: 4, start: '12:50', end: '13:30', block: 'Shower + cook + eat 🍳', completed: false },
        { id: 5, start: '13:30', end: '14:10', block: 'Spanish Class', completed: false },
        { id: 6, start: '14:10', end: '15:40', block: 'Trading 📈', completed: false },
        { id: 7, start: '15:40', end: '18:15', block: 'SaaS development 💻', completed: false },
        { id: 8, start: '18:15', end: '18:45', block: 'Shower 🚿', completed: false },
        { id: 9, start: '18:45', end: '19:30', block: 'Errands 🛒 + Mental health 🎵', completed: false },
        { id: 10, start: '19:30', end: '20:30', block: 'Meal 2 prep+eat', completed: false },
        { id: 11, start: '20:30', end: '24:00', block: 'GroupMe startups + Ea bot Checks', completed: false },
        { id: 12, start: '24:00', end: '24:30', block: 'Break + snack 📋', completed: false },
        { id: 13, start: '24:30', end: '04:15', block: 'Groupme', completed: false },
        { id: 14, start: '04:15', end: '04:30', block: 'Money Review 💰', completed: false },
        { id: 15, start: '04:30', end: '', block: 'Wrap up + notebook 📓', completed: false },
        { id: 16, start: '06:00', end: '11:00', block: 'Sleep', completed: false }
    ],
    friday: [
        { id: 1, start: '11:00', end: '11:20', block: 'Wake up + prayer 🙏', completed: false },
        { id: 2, start: '11:20', end: '11:50', block: 'Admin & planning 📋', completed: false },
        { id: 3, start: '11:50', end: '12:50', block: 'Fitness 💪', completed: false },
        { id: 4, start: '12:50', end: '13:30', block: 'Shower + cook + eat 🍳', completed: false },
        { id: 5, start: '13:30', end: '14:10', block: 'Class', completed: false },
        { id: 6, start: '14:10', end: '15:40', block: 'Trading 📈', completed: false },
        { id: 7, start: '15:40', end: '18:15', block: 'SaaS development 💻', completed: false },
        { id: 8, start: '18:15', end: '18:45', block: 'Mental health 🎵', completed: false },
        { id: 9, start: '18:45', end: '19:15', block: 'Shower + eat meal 2 🚿', completed: false },
        { id: 10, start: '19:15', end: '24:00', block: 'GroupMe startups + Ea bot Checks', completed: false },
        { id: 11, start: '24:00', end: '24:30', block: 'Break + snack 📋', completed: false },
        { id: 12, start: '24:30', end: '04:15', block: 'Groupme', completed: false },
        { id: 13, start: '04:15', end: '04:30', block: 'Money Review 💰', completed: false },
        { id: 14, start: '04:30', end: '', block: 'Wrap up + notebook 📓', completed: false },
        { id: 15, start: '06:00', end: '11:00', block: 'Pray Sleep', completed: false }
    ],
    saturday: [
        { id: 1, start: '11:00', end: '11:20', block: 'Wake up + prayer 🙏', completed: false },
        { id: 2, start: '12:00', end: '13:00', block: 'Fitness 💪', completed: false },
        { id: 3, start: '13:30', end: '14:00', block: 'Laundry & cleaning 🧹', completed: false },
        { id: 4, start: '15:00', end: '16:30', block: 'Trading 📈', completed: false },
        { id: 5, start: '18:30', end: '18:45', block: 'Business ops 📦', completed: false },
        { id: 6, start: '19:15', end: '19:45', block: 'Shower + eat meal 2 🚿', completed: false },
        { id: 7, start: '04:15', end: '04:30', block: 'Money review 💰', completed: false }
    ],
    sunday: [
        { id: 1, start: '12:00', end: '12:30', block: 'Wake up + prayer 🙏', completed: false },
        { id: 2, start: '12:30', end: '13:30', block: 'Cook + eat 🍳', completed: false },
        { id: 3, start: '13:30', end: '15:30', block: 'Family calls + social 👥', completed: false },
        { id: 4, start: '15:30', end: '17:00', block: 'Mental health 🎵', completed: false },
        { id: 5, start: '17:00', end: '18:00', block: 'Walk + fresh air 🚶', completed: false },
        { id: 6, start: '18:00', end: '19:00', block: 'Dinner + reflection 🍽️', completed: false },
        { id: 7, start: '19:00', end: '20:00', block: 'Weekly prep & planning 📋', completed: false },
        { id: 8, start: '20:00', end: '21:00', block: 'Games 🎮', completed: false },
        { id: 9, start: '21:00', end: '', block: 'Pray Sleep early 😴', completed: false }
    ]
};

// Application State
let state = {
    tasks: [],
    timetable: {},
    transactions: [],
    fitness: {},
    editableData: {},
    calendarData: {},
    currentFilter: 'today',
    currentDay: 'monday',
    currentTab: 'dashboard',
    calendarDate: new Date()
};

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initializeApp();
    
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed:', err));
    }
});

function loadData() {
    // Load tasks
    const tasks = localStorage.getItem(STORAGE_KEYS.TASKS);
    try {
        state.tasks = tasks ? JSON.parse(tasks) : [];
    } catch (e) {
        console.error('Failed to parse tasks:', e);
        state.tasks = [];
    }

    // Load timetable
    const timetable = localStorage.getItem(STORAGE_KEYS.TIMETABLE);
    try {
        state.timetable = timetable ? JSON.parse(timetable) : JSON.parse(JSON.stringify(DEFAULT_TIMETABLE));
    } catch (e) {
        console.error('Failed to parse timetable:', e);
        state.timetable = JSON.parse(JSON.stringify(DEFAULT_TIMETABLE));
    }
    
    // Check if we need to reset for a new day
    const lastDate = localStorage.getItem('sitemendr_last_date');
    const today = new Date().toDateString();
    
    if (lastDate && lastDate !== today) {
        // It's a new day - reset all completed statuses
        Object.keys(state.timetable).forEach(day => {
            state.timetable[day].forEach(block => {
                block.completed = false;
            });
        });
        // Save the reset timetable
        saveToStorage(STORAGE_KEYS.TIMETABLE, state.timetable);
    }
    
    // Update last date
    localStorage.setItem('sitemendr_last_date', today);

    // Load transactions
    const transactions = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
    try {
        state.transactions = transactions ? JSON.parse(transactions) : [];
    } catch (e) {
        console.error('Failed to parse transactions:', e);
        state.transactions = [];
    }

    // Load fitness
    const fitness = localStorage.getItem(STORAGE_KEYS.FITNESS);
    try {
        state.fitness = fitness ? JSON.parse(fitness) : {};
    } catch (e) {
        console.error('Failed to parse fitness:', e);
        state.fitness = {};
    }

    // Load editable data
    const editableData = localStorage.getItem(STORAGE_KEYS.EDITABLE_DATA);
    try {
        state.editableData = editableData ? JSON.parse(editableData) : {};
    } catch (e) {
        console.error('Failed to parse editable data:', e);
        state.editableData = {};
    }

    // Load trading goal
    const tradingGoal = localStorage.getItem(STORAGE_KEYS.TRADING_GOAL);
    if (!tradingGoal) {
        localStorage.setItem(STORAGE_KEYS.TRADING_GOAL, JSON.stringify({ target: 1000, current: 0 }));
    }

    // Load savings goal
    const savingsGoal = localStorage.getItem(STORAGE_KEYS.SAVINGS_GOAL);
    if (!savingsGoal) {
        localStorage.setItem(STORAGE_KEYS.SAVINGS_GOAL, JSON.stringify({ target: 20000, current: 0 }));
    }
}

function initializeApp() {
    // Set current date/time
    setCurrentDate();
    
    // Start live clock updating every second
    updateLiveClock();
    setInterval(updateLiveClock, 1000);
    
    // Get current day
    const today = new Date().getDay();
    const dayMap = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    state.currentDay = dayMap[today];
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize modals
    initializeModals();
    
    // Initialize forms
    initializeForms();
    
    // Initialize sub-tabs
    initializeSubTabs();
    
    // Initialize day selector
    initializeDaySelector();
    
    // Initialize filter buttons
    initializeFilters();
    
    // Initialize fitness checkboxes
    initializeFitness();
    
    // Initialize backup/import functions
    initializeBackup();
    
    // Load saved editable content first
    loadEditableContent();
    
    // Initialize inline editing
    initializeInlineEditing();
    
    // Initialize calendar
    initializeCalendar();
    
    // Render today's schedule on dashboard
    renderTodaySchedule();
    
    // Update all displays
    updateAllDisplays();
    
    // Update streak
    updateStreak();
}

// ============================================
// Inline Editing - Visual Feedback
// ============================================

// Show save indicator briefly
function showSaveIndicator() {
    const existing = document.querySelector('.save-indicator');
    if (existing) existing.remove();
    
    const indicator = document.createElement('div');
    indicator.className = 'save-indicator';
    indicator.innerHTML = '✓ Saved';
    document.body.appendChild(indicator);
    
    // Trigger animation
    setTimeout(() => indicator.classList.add('show'), 10);
    
    // Hide after 1.5 seconds
    setTimeout(() => {
        indicator.classList.remove('show');
        setTimeout(() => indicator.remove(), 300);
    }, 1500);
}

function initializeInlineEditing() {
    // Create a debounced save function for performance
    const debouncedSave = debounce((el) => {
        saveEditableContent(el);
        showSaveIndicator();
    }, 500);

    // Set up blur event listeners for all editable elements
    document.querySelectorAll('[contenteditable="true"]').forEach(el => {
        el.addEventListener('blur', function() {
            debouncedSave(this);
        });
        
        // Also save on Enter key
        el.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.blur();
            }
            // Ctrl+S to save
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                debouncedSave(this);
            }
        });
    });
}

function saveEditableContent(element) {
    // Generate a unique key for this element based on its path in the DOM
    let key = '';
    let current = element;
    
    // Build a unique key from the element's ID, classes, and position
    while (current && current !== document.body) {
        let part = current.tagName.toLowerCase();
        if (current.id) {
            part += '#' + current.id;
        } else if (current.className && typeof current.className === 'string' && current.className.trim()) {
            part += '.' + current.className.trim().split(' ')[0];
        }
        key = part + (key ? '>' + key : '');
        current = current.parentElement;
    }
    
    // Store the sanitized content
    const content = sanitizeHTML(element.innerHTML);
    state.editableData[key] = content;
    
    saveToStorage(STORAGE_KEYS.EDITABLE_DATA, state.editableData);
}

function loadEditableContent() {
    // Load saved editable content from storage
    const savedData = loadFromStorage(STORAGE_KEYS.EDITABLE_DATA);
    if (!savedData) return;
    
    state.editableData = savedData;
    
    // Restore content to all editable elements
    document.querySelectorAll('[contenteditable="true"]').forEach(el => {
        // Generate the same key we used when saving
        let key = '';
        let current = el;
        
        while (current && current !== document.body) {
            let part = current.tagName.toLowerCase();
            if (current.id) {
                part += '#' + current.id;
            } else if (current.className && typeof current.className === 'string' && current.className.trim()) {
                part += '.' + current.className.trim().split(' ')[0];
            }
            key = part + (key ? '>' + key : '');
            current = current.parentElement;
        }
        
        // Restore the content if we have it saved
        if (savedData[key]) {
            el.innerHTML = sanitizeHTML(savedData[key]);
        }
    });
}

// ============================================
// Calendar Functions
// ============================================

function initializeCalendar() {
    // Load calendar data
    const savedCalendar = loadFromStorage(STORAGE_KEYS.CALENDAR_DATA);
    if (savedCalendar) {
        state.calendarData = savedCalendar;
    }
    
    // Set up navigation buttons
    document.getElementById('prevMonth').addEventListener('click', () => {
        state.calendarDate.setMonth(state.calendarDate.getMonth() - 1);
        renderCalendar();
    });
    
    document.getElementById('nextMonth').addEventListener('click', () => {
        state.calendarDate.setMonth(state.calendarDate.getMonth() + 1);
        renderCalendar();
    });
    
    // Close day detail
    document.getElementById('closeDayDetail').addEventListener('click', () => {
        document.getElementById('dayDetailPanel').classList.remove('active');
        const backdrop = document.getElementById('dayDetailBackdrop');
        if (backdrop) backdrop.classList.remove('active');
    });
    
    // Close on backdrop click
    const backdrop = document.getElementById('dayDetailBackdrop');
    if (backdrop) {
        backdrop.addEventListener('click', () => {
            document.getElementById('dayDetailPanel').classList.remove('active');
            backdrop.classList.remove('active');
        });
    }
    
    // Save notes on blur
    document.getElementById('dayNotes').addEventListener('blur', function() {
        const selectedDate = document.getElementById('selectedDayDate').dataset.date;
        if (selectedDate) {
            saveDayNotes(selectedDate, this.innerHTML);
        }
    });
    
    // Initial render
    renderCalendar();
}

function renderCalendar() {
    const year = state.calendarDate.getFullYear();
    const month = state.calendarDate.getMonth();
    
    // Update month display
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementById('currentMonthYear').textContent = `${monthNames[month]} ${year}`;
    
    const grid = document.getElementById('calendarGrid');
    if (!grid) {
        return;
    }
    grid.innerHTML = '';
    
    // Get first day of month and total days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const today = new Date();
    // Use local date string to avoid timezone issues
    const todayStr = today.getFullYear() + '-' + 
        String(today.getMonth() + 1).padStart(2, '0') + '-' + 
        String(today.getDate()).padStart(2, '0');
    
    // Previous month days
    const prevMonthDays = firstDay.getDay();
    for (let i = prevMonthDays - 1; i >= 0; i--) {
        const day = new Date(year, month, -i);
        const dayEl = createCalendarDay(day, true, false, todayStr);
        grid.appendChild(dayEl);
    }
    
    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
        const day = new Date(year, month, i);
        const dayStr = day.getFullYear() + '-' + 
            String(day.getMonth() + 1).padStart(2, '0') + '-' + 
            String(day.getDate()).padStart(2, '0');
        const dayEl = createCalendarDay(day, false, dayStr === todayStr, todayStr);
        grid.appendChild(dayEl);
    }
    
    // Next month days
    const remainingDays = 42 - grid.children.length;
    for (let i = 1; i <= remainingDays; i++) {
        const day = new Date(year, month + 1, i);
        const dayEl = createCalendarDay(day, true, false, todayStr);
        grid.appendChild(dayEl);
    }
}

function createCalendarDay(date, isOtherMonth, isToday = false, todayStr = '') {
    const dayEl = document.createElement('div');
    dayEl.className = 'calendar-day';
    if (isOtherMonth) dayEl.classList.add('other-month');
    if (isToday) dayEl.classList.add('today');
    
    // Use local date string to avoid timezone issues
    const dateStr = date.getFullYear() + '-' + 
        String(date.getMonth() + 1).padStart(2, '0') + '-' + 
        String(date.getDate()).padStart(2, '0');
    const dayData = state.calendarData[dateStr];
    
    // Format date like "Tue 24"
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const dayNum = date.getDate();
    
    // Check if day has data (notes, tasks, fitness, schedule, etc.)
    let hasDayData = dayData && (
        dayData.notes || 
        (dayData.schedule && dayData.schedule.length > 0) ||
        (dayData.tasks && dayData.tasks.length > 0) ||
        dayData.fitness ||
        dayData.learning
    );
    
    // Note: We don't check timetable by day name anymore 
    // because that would mark ALL mondays/tuesdays/etc. as having data
    // The calendarData already contains per-date data from clicking on days
    
    if (hasDayData) {
        dayEl.classList.add('has-data');
    } else if (!isToday && !isOtherMonth) {
        // Past days with no data - mark as missed
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const checkDate = new Date(date);
        checkDate.setHours(0, 0, 0, 0);
        
        if (checkDate < today) {
            dayEl.classList.add('missed');
        }
    }
    
    dayEl.innerHTML = `
        <span class="day-number">${dayName} ${dayNum}</span>
    `;
    
    // Use addEventListener for better compatibility
    dayEl.addEventListener('click', function() {
        showDayDetail(dateStr);
    });
    dayEl.style.cursor = 'pointer';
    
    return dayEl;
}

function showDayDetail(dateStr) {
    const panel = document.getElementById('dayDetailPanel');
    const dateEl = document.getElementById('selectedDayDate');
    const date = new Date(dateStr);
    
    dateEl.textContent = formatDate(date);
    dateEl.dataset.date = dateStr;
    
    const dayData = state.calendarData[dateStr] || {};
    
    // Show schedule
    renderDaySchedule(dateStr, dayData);
    
    // Show tasks
    renderDayTasks(dateStr, dayData);
    
    // Show fitness
    document.getElementById('dayFitness').innerHTML = dayData.fitness || '<span class="empty-state">No fitness data</span>';
    
    // Show learning
    document.getElementById('dayLearning').innerHTML = dayData.learning || '<span class="empty-state">No learning data</span>';
    
    // Show finance
    renderDayFinance(dateStr, dayData);
    
    // Show notes
    document.getElementById('dayNotes').innerHTML = dayData.notes || '';
    
    panel.classList.add('active');
    
    // Show backdrop
    const backdrop = document.getElementById('dayDetailBackdrop');
    if (backdrop) {
        backdrop.classList.add('active');
    }
}

function renderDaySchedule(dateStr, dayData) {
    const container = document.getElementById('dayScheduleList');
    container.innerHTML = '';
    
    // Make sure timetable is loaded
    if (!state.timetable || Object.keys(state.timetable).length === 0) {
        // Load from storage
        const savedTimetable = loadFromStorage('sitemendr_timetable');
        if (savedTimetable) {
            state.timetable = savedTimetable;
        }
    }
    
    const dayOfWeek = getDayOfWeek(dateStr);
    const timetable = state.timetable[dayOfWeek] || [];
    
    if (timetable.length === 0) {
        container.innerHTML = '<div class="empty-state">No schedule for this day</div>';
        return;
    }
    
    timetable.forEach(block => {
        const item = document.createElement('div');
        item.className = 'day-schedule-item' + (block.completed ? ' completed' : '');
        item.innerHTML = `
            <span class="day-schedule-time">${block.start}</span>
            <span>${block.block}</span>
        `;
        container.appendChild(item);
    });
}

function renderDayTasks(dateStr, dayData) {
    const container = document.getElementById('dayTasksList');
    container.innerHTML = '';
    
    // Get today's tasks
    const today = new Date().toISOString().split('T')[0];
    const tasks = state.tasks.filter(t => t.date === dateStr || (t.recurring && t.date === today));
    
    if (tasks.length === 0) {
        container.innerHTML = '<div class="empty-state">No tasks</div>';
        return;
    }
    
    tasks.forEach(task => {
        const item = document.createElement('div');
        item.className = 'day-task-item' + (task.completed ? ' completed' : '');
        item.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} disabled>
            <span>${task.title}</span>
        `;
        container.appendChild(item);
    });
}

function renderDayFinance(dateStr, dayData) {
    const container = document.getElementById('dayFinance');
    
    // Get transactions for this day
    const transactions = state.transactions.filter(t => t.date === dateStr);
    
    if (transactions.length === 0) {
        container.innerHTML = '<span class="empty-state">No transactions</span>';
        return;
    }
    
    let totalIncome = 0;
    let totalExpense = 0;
    
    transactions.forEach(t => {
        if (t.type === 'income') totalIncome += t.amount;
        else totalExpense += t.amount;
    });
    
    container.innerHTML = `
        <div>Income: <span class="finance-value positive">+Ksh ${totalIncome.toLocaleString()}</span></div>
        <div>Expense: <span class="finance-value negative">-Ksh ${totalExpense.toLocaleString()}</span></div>
    `;
}

function saveDayNotes(dateStr, notes) {
    if (!state.calendarData[dateStr]) {
        state.calendarData[dateStr] = {};
    }
    state.calendarData[dateStr].notes = notes;
    saveToStorage(STORAGE_KEYS.CALENDAR_DATA, state.calendarData);
}

function getDayOfWeek(dateStr) {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[new Date(dateStr).getDay()];
}

function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ============================================
// Date Utilities
// ============================================
function getToday() {
    return new Date().toISOString().split('T')[0];
}

function getWeekDates() {
    const today = new Date();
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - today.getDay() + i);
        weekDates.push(date.toISOString().split('T')[0]);
    }
    return weekDates;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatTime(timeStr) {
    if (!timeStr) return '';
    const [hours, minutes] = timeStr.split(':');
    const h = parseInt(hours);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hour = h % 12 || 12;
    return `${hour}:${minutes} ${ampm}`;
}

function setCurrentDate() {
    const dateEl = document.getElementById('currentDate');
    const dateElUTC = document.getElementById('currentDateUTC');
    const dayLabelEl = document.getElementById('currentDayLabel');
    const todayDateDisplay = document.getElementById('todayDateDisplay');
    const todayWorkoutLabel = document.getElementById('todayWorkoutLabel');
    
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = today.toLocaleDateString('en-US', options);
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
    
    if (dateEl) dateEl.textContent = dateStr;
    if (dateElUTC) {
        const utcStr = today.toUTCString();
        dateElUTC.textContent = 'UTC: ' + utcStr;
    }
    if (dayLabelEl) dayLabelEl.textContent = dayName;
    if (todayDateDisplay) todayDateDisplay.textContent = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    // Set today's workout label
    if (todayWorkoutLabel) {
        const dayOfWeek = today.getDay();
        const workoutLabels = ['Rest', 'Upper Body', 'Lower Body', 'Core', 'Rest', 'Full Body', 'Light Movement'];
        const restDays = [0, 3, 6];
        if (restDays.includes(dayOfWeek)) {
            todayWorkoutLabel.textContent = 'Rest Day';
        } else {
            todayWorkoutLabel.textContent = workoutLabels[dayOfWeek];
        }
    }
}

// Live clock for both timezones
function updateLiveClock() {
    const now = new Date();
    
    // Local time (Africa/Nairobi)
    const localTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const localDateEl = document.getElementById('currentDate');
    if (localDateEl) {
        localDateEl.textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + ' ' + localTime;
    }
    
    // USA time (Eastern - EST/EDT)
    const usaDateEl = document.getElementById('currentDateUSA');
    if (usaDateEl) {
        const usaTime = now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const usaDate = now.toLocaleDateString('en-US', { timeZone: 'America/New_York', weekday: 'short', month: 'short', day: 'numeric' });
        usaDateEl.textContent = usaDate + ' ' + usaTime;
    }
}

// ============================================
// Navigation
// ============================================
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabId = item.dataset.tab;
            switchTab(tabId);
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

function switchTab(tabId) {
    state.currentTab = tabId;
    
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Refresh displays if needed
    if (tabId === 'tasks') {
        renderTasks();
    } else if (tabId === 'timetables') {
        renderTimetable(state.currentDay);
    } else if (tabId === 'finances') {
        renderTransactions();
    } else if (tabId === 'calendar') {
        renderCalendar();
    }
}

// ============================================
// Modals
// ============================================
function initializeModals() {
    // Close buttons
    document.querySelectorAll('.modal-close, .btn-cancel').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modalId = e.target.dataset.modal;
            if (modalId) {
                closeModal(modalId);
            }
        });
    });
    
    // Close modal on background click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Quick add buttons
    document.querySelectorAll('.quick-add-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            if (target === 'tasks') {
                openModal('taskModal');
                document.getElementById('taskDate').value = getToday();
            }
        });
    });
    
    // Add buttons
    document.getElementById('addTaskBtn')?.addEventListener('click', () => {
        openModal('taskModal');
        document.getElementById('taskDate').value = getToday();
    });
    
    document.getElementById('addTimeBlockBtn')?.addEventListener('click', () => {
        openModal('timeBlockModal');
        document.getElementById('blockDay').value = state.currentDay;
    });
    
    document.getElementById('addIncomeBtn')?.addEventListener('click', () => {
        openModal('transactionModal');
        document.getElementById('transactionType').value = 'income';
        document.getElementById('transactionDate').value = getToday();
    });
    
    document.getElementById('addExpenseBtn')?.addEventListener('click', () => {
        openModal('transactionModal');
        document.getElementById('transactionType').value = 'expense';
        document.getElementById('transactionDate').value = getToday();
    });
    
    // Add fitness day button
    document.getElementById('addFitnessDayBtn')?.addEventListener('click', addFitnessDay);
    
    // Delete time block button
    document.getElementById('deleteTimeBlockBtn')?.addEventListener('click', () => {
        const blockId = parseInt(document.getElementById('editBlockId').value);
        deleteTimeBlock(blockId);
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// ============================================
// Forms
// ============================================
function initializeForms() {
    // Task Form
    document.getElementById('taskForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        saveTask();
    });
    
    // Time Block Form
    document.getElementById('timeBlockForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        saveTimeBlock();
    });
    
    // Edit Time Block Form
    document.getElementById('editTimeBlockForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        updateTimeBlock();
    });
    
    // Transaction Form
    document.getElementById('transactionForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        saveTransaction();
    });
}

// ============================================
// Timetable
// ============================================
function initializeDaySelector() {
    const dayBtns = document.querySelectorAll('.day-btn');
    
    dayBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            state.currentDay = btn.dataset.day;
            
            dayBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            renderTimetable(state.currentDay);
        });
    });
    
    // Set active button for current day
    dayBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.day === state.currentDay);
    });
}

function renderTimetable(day) {
    const container = document.getElementById('timeBlocks');
    if (!container) return;
    
    const schedule = state.timetable[day] || [];
    
    if (schedule.length === 0) {
        container.innerHTML = '<div class="empty-state">No schedule for this day. Click "Add Time Block" to add one.</div>';
        return;
    }
    
    // Sort by start time
    const sortedSchedule = [...schedule].sort((a, b) => {
        return a.start.localeCompare(b.start);
    });
    
    container.innerHTML = sortedSchedule.map(item => `
        <div class="time-block ${item.completed ? 'completed' : ''}" onclick="editTimeBlock(${item.id})">
            <div class="time-block-time">${formatTime(item.start)}</div>
            <div class="time-block-end">${item.end ? formatTime(item.end) : 'end'}</div>
            <div class="time-block-content">${item.block}</div>
            <div class="time-block-check">
                <input type="checkbox" ${item.completed ? 'checked' : ''} onclick="event.stopPropagation(); toggleTimeBlock('${day}', ${item.id})">
            </div>
        </div>
    `).join('');
}

function saveTimeBlock() {
    const day = document.getElementById('blockDay').value;
    const start = document.getElementById('blockStart').value;
    const end = document.getElementById('blockEnd').value;
    const block = document.getElementById('blockContent').value;
    
    if (!day || !start || !block) return;
    
    const newBlock = {
        id: Date.now(),
        start,
        end,
        block,
        completed: false
    };
    
    if (!state.timetable[day]) {
        state.timetable[day] = [];
    }
    
    state.timetable[day].push(newBlock);
    saveToStorage(STORAGE_KEYS.TIMETABLE, state.timetable);
    
    // Reset and close modal
    document.getElementById('timeBlockForm').reset();
    closeModal('timeBlockModal');
    
    // Refresh timetable
    renderTimetable(state.currentDay);
    renderTodaySchedule();
}

function editTimeBlock(blockId) {
    let block = null;
    let day = null;
    
    for (const d of Object.keys(state.timetable)) {
        const found = state.timetable[d].find(b => b.id === blockId);
        if (found) {
            block = found;
            day = d;
            break;
        }
    }
    
    if (!block) return;
    
    document.getElementById('editBlockId').value = block.id;
    document.getElementById('editBlockStart').value = block.start;
    document.getElementById('editBlockEnd').value = block.end || '';
    document.getElementById('editBlockContent').value = block.block;
    
    openModal('editTimeBlockModal');
}

function updateTimeBlock() {
    const blockId = parseInt(document.getElementById('editBlockId').value);
    const start = document.getElementById('editBlockStart').value;
    const end = document.getElementById('editBlockEnd').value;
    const block = document.getElementById('editBlockContent').value;
    
    for (const day of Object.keys(state.timetable)) {
        const blockIndex = state.timetable[day].findIndex(b => b.id === blockId);
        if (blockIndex !== -1) {
            state.timetable[day][blockIndex].start = start;
            state.timetable[day][blockIndex].end = end;
            state.timetable[day][blockIndex].block = block;
            break;
        }
    }
    
    saveToStorage(STORAGE_KEYS.TIMETABLE, state.timetable);
    closeModal('editTimeBlockModal');
    renderTimetable(state.currentDay);
    renderTodaySchedule();
}

function deleteTimeBlock(blockId) {
    for (const day of Object.keys(state.timetable)) {
        const blockIndex = state.timetable[day].findIndex(b => b.id === blockId);
        if (blockIndex !== -1) {
            state.timetable[day].splice(blockIndex, 1);
            break;
        }
    }
    
    saveToStorage(STORAGE_KEYS.TIMETABLE, state.timetable);
    closeModal('editTimeBlockModal');
    renderTimetable(state.currentDay);
    renderTodaySchedule();
}

function toggleTimeBlock(day, blockId) {
    const block = state.timetable[day].find(b => b.id === blockId);
    if (block) {
        block.completed = !block.completed;
        saveToStorage(STORAGE_KEYS.TIMETABLE, state.timetable);
        
        // Update calendar data - find today's date
        const today = new Date().toISOString().split('T')[0];
        updateCalendarDayData(today);
        
        renderTimetable(day);
        renderTodaySchedule();
        updateStreak();
        renderCalendar();
    }
}

function updateCalendarDayData(dateStr) {
    const dayOfWeek = getDayOfWeek(dateStr);
    const timetable = state.timetable[dayOfWeek] || [];
    
    if (!state.calendarData[dateStr]) {
        state.calendarData[dateStr] = {};
    }
    
    // Check if any schedule is completed
    const hasCompleted = timetable.some(b => b.completed);
    state.calendarData[dateStr].scheduleCompleted = hasCompleted;
    
    saveToStorage(STORAGE_KEYS.CALENDAR_DATA, state.calendarData);
}

// ============================================
// Today's Schedule (Dashboard)
// ============================================
function renderTodaySchedule() {
    const container = document.getElementById('todayScheduleList');
    if (!container) return;
    
    const today = getToday();
    const dayOfWeek = new Date().getDay();
    const dayMap = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDayName = dayMap[dayOfWeek];
    
    const schedule = state.timetable[currentDayName] || [];
    
    if (schedule.length === 0) {
        container.innerHTML = '<div class="empty-state">No schedule for today</div>';
        return;
    }
    
    const sortedSchedule = [...schedule].sort((a, b) => {
        return a.start.localeCompare(b.start);
    });
    
    container.innerHTML = sortedSchedule.map(item => `
        <div class="schedule-item ${item.completed ? 'completed' : ''}">
            <div class="schedule-time">
                <span class="schedule-start">${formatTime(item.start)}</span>
                ${item.end ? `<span class="schedule-end">- ${formatTime(item.end)}</span>` : ''}
            </div>
            <div class="schedule-content">${item.block}</div>
            <div class="schedule-check">
                <input type="checkbox" ${item.completed ? 'checked' : ''} 
                    onchange="toggleTimeBlock('${currentDayName}', ${item.id})">
            </div>
        </div>
    `).join('');
    
    // Update tasks done count
    const completedCount = schedule.filter(s => s.completed).length;
    const totalCount = schedule.length;
    const tasksDoneCount = document.getElementById('tasksDoneCount');
    if (tasksDoneCount) {
        tasksDoneCount.textContent = `${completedCount}/${totalCount}`;
    }
}

// ============================================
// Tasks
// ============================================
function saveTask() {
    const title = document.getElementById('taskTitle').value.trim();
    const category = document.getElementById('taskCategory').value;
    const date = document.getElementById('taskDate').value;
    const startTime = document.getElementById('taskStartTime').value;
    const endTime = document.getElementById('taskEndTime').value;
    
    if (!title || !date) return;
    
    const task = {
        id: Date.now(),
        title,
        category,
        date,
        startTime,
        endTime,
        completed: false
    };
    
    state.tasks.push(task);
    saveToStorage(STORAGE_KEYS.TASKS, state.tasks);
    
    document.getElementById('taskForm').reset();
    closeModal('taskModal');
    updateAllDisplays();
}

function deleteTask(id) {
    state.tasks = state.tasks.filter(task => task.id !== id);
    saveToStorage(STORAGE_KEYS.TASKS, state.tasks);
    updateAllDisplays();
}

function toggleTaskComplete(id) {
    const task = state.tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveToStorage(STORAGE_KEYS.TASKS, state.tasks);
        updateAllDisplays();
        updateStreak();
    }
}

function renderTasks() {
    const container = document.getElementById('tasksList');
    if (!container) return;
    
    const filteredTasks = filterTasks(state.tasks);
    
    if (filteredTasks.length === 0) {
        container.innerHTML = '<div class="empty-state">No tasks found</div>';
        return;
    }
    
    container.innerHTML = filteredTasks.map(task => `
        <div class="task-item">
            <input type="checkbox" class="task-checkbox" 
                ${task.completed ? 'checked' : ''} 
                onchange="toggleTaskComplete(${task.id})">
            <div class="task-info">
                <div class="task-title" style="${task.completed ? 'text-decoration: line-through; color: var(--gray);' : ''}">${task.title}</div>
                <div class="task-meta">
                    <span>${formatDate(task.date)}</span>
                    ${task.startTime ? `<span>${formatTime(task.startTime)}${task.endTime ? ' - ' + formatTime(task.endTime) : ''}</span>` : ''}
                    <span class="category-badge ${task.category}">${task.category}</span>
                </div>
            </div>
            <button class="delete-btn" onclick="deleteTask(${task.id})">🗑️</button>
        </div>
    `).join('');
}

function filterTasks(tasks) {
    const today = getToday();
    const weekDates = getWeekDates();
    
    switch (state.currentFilter) {
        case 'today':
            return tasks.filter(task => task.date === today);
        case 'week':
            return tasks.filter(task => weekDates.includes(task.date));
        case 'all':
            return tasks;
        case 'history':
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
}

// ============================================
// Filters
// ============================================
function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            state.currentFilter = btn.dataset.filter;
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            renderTasks();
        });
    });
}

// ============================================
// Fitness
// ============================================
function initializeFitness() {
    const fitnessChecks = document.querySelectorAll('.fitness-check');
    
    fitnessChecks.forEach(checkbox => {
        const day = checkbox.closest('.fitness-day').dataset.day;
        if (state.fitness[day]) {
            checkbox.checked = state.fitness[day];
            // Apply completed class if already checked
            if (state.fitness[day]) {
                checkbox.closest('.fitness-day').classList.add('completed');
            }
        }
        
        checkbox.addEventListener('change', () => {
            state.fitness[day] = checkbox.checked;
            saveToStorage(STORAGE_KEYS.FITNESS, state.fitness);
            
            // Add/remove completed class for visual feedback
            const fitnessDay = checkbox.closest('.fitness-day');
            if (checkbox.checked) {
                fitnessDay.classList.add('completed');
            } else {
                fitnessDay.classList.remove('completed');
            }
        });
    });
}

// ============================================
// Finances
// ============================================
function saveTransaction() {
    const modal = document.getElementById('transactionModal');
    const editId = modal.dataset.editId;
    
    const type = document.getElementById('transactionType').value;
    const amount = parseFloat(document.getElementById('transactionAmount').value);
    const category = document.getElementById('transactionCategory').value;
    const date = document.getElementById('transactionDate').value;
    const description = document.getElementById('transactionDescription').value;
    
    if (!amount || !date) return;
    
    if (editId) {
        // Update existing transaction
        const index = state.transactions.findIndex(t => t.id === parseInt(editId));
        if (index !== -1) {
            state.transactions[index] = {
                ...state.transactions[index],
                type,
                amount,
                category,
                date,
                description
            };
        }
        delete modal.dataset.editId;
    } else {
        // Add new transaction
        const transaction = {
            id: Date.now(),
            type,
            amount,
            category,
            date,
            description
        };
        state.transactions.push(transaction);
    }
    
    saveToStorage(STORAGE_KEYS.TRANSACTIONS, state.transactions);
    
    document.getElementById('transactionForm').reset();
    closeModal('transactionModal');
    renderTransactions();
    updateAllDisplays();
}

function renderTransactions() {
    const container = document.getElementById('transactionsList');
    if (!container) return;
    
    const sortedTransactions = [...state.transactions].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    ).slice(0, 20);
    
    if (sortedTransactions.length === 0) {
        container.innerHTML = '<div class="empty-state">No transactions yet</div>';
        return;
    }
    
    container.innerHTML = sortedTransactions.map(t => `
        <div class="transaction-item" data-id="${t.id}">
            <div class="transaction-info">
                <span class="transaction-category">${formatCategory(t.category)}</span>
                <span class="transaction-date">${formatDate(t.date)}</span>
            </div>
            <span class="transaction-amount ${t.type}">
                ${t.type === 'income' ? '+' : '-'}Ksh ${t.amount.toFixed(2)}
            </span>
            <div class="transaction-actions">
                <button class="edit-btn" onclick="editTransaction(${t.id})">✏️</button>
                <button class="delete-btn" onclick="deleteTransaction(${t.id})">🗑️</button>
            </div>
        </div>
    `).join('');
}

function formatCategory(category) {
    const categories = {
        'salary': 'Salary',
        'writing': 'Writing',
        'trading': 'Trading',
        'saas': 'SaaS',
        'other-income': 'Other Income',
        'living': 'Living Expenses',
        'food': 'Food',
        'transport': 'Transport',
        'utilities': 'Utilities',
        'health': 'Health',
        'other-expense': 'Other'
    };
    return categories[category] || category;
}

// ============================================
// Edit Transaction
// ============================================
function editTransaction(id) {
    const transaction = state.transactions.find(t => t.id === id);
    if (!transaction) return;
    
    // Open the transaction modal
    openModal('transactionModal');
    
    // Fill in the form with the transaction data
    document.getElementById('transactionType').value = transaction.type;
    document.getElementById('transactionAmount').value = transaction.amount;
    document.getElementById('transactionCategory').value = transaction.category;
    document.getElementById('transactionDate').value = transaction.date;
    document.getElementById('transactionDescription').value = transaction.description || '';
    
    // Store the ID being edited
    document.getElementById('transactionModal').dataset.editId = id;
}

// ============================================
// Delete Transaction
// ============================================
function deleteTransaction(id) {
    if (!confirm('Are you sure you want to delete this transaction?')) return;
    
    state.transactions = state.transactions.filter(t => t.id !== id);
    saveToStorage(STORAGE_KEYS.TRANSACTIONS, state.transactions);
    renderTransactions();
    updateAllDisplays();
}

function calculateBalance() {
    let balance = 0;
    let weekIncome = 0;
    let weekExpense = 0;
    
    const weekDates = getWeekDates();
    
    state.transactions.forEach(t => {
        if (t.type === 'income') {
            balance += t.amount;
            if (weekDates.includes(t.date)) {
                weekIncome += t.amount;
            }
        } else {
            balance -= t.amount;
            if (weekDates.includes(t.date)) {
                weekExpense += t.amount;
            }
        }
    });
    
    return { balance, weekBalance: weekIncome - weekExpense };
}

function renderFinanceSnapshot() {
    const { balance, weekBalance } = calculateBalance();
    
    const miniBalance = document.getElementById('miniBalance');
    const miniWeekBalance = document.getElementById('miniWeekBalance');
    
    if (miniBalance) {
        miniBalance.textContent = `Ksh ${balance.toFixed(2)}`;
        miniBalance.className = `finance-value ${balance >= 0 ? 'positive' : 'negative'}`;
    }
    
    if (miniWeekBalance) {
        miniWeekBalance.textContent = `${weekBalance >= 0 ? '+' : ''}Ksh ${weekBalance.toFixed(2)}`;
        miniWeekBalance.className = `finance-value ${weekBalance >= 0 ? 'positive' : 'negative'}`;
    }
    
    const totalBalance = document.getElementById('totalBalance');
    if (totalBalance) {
        totalBalance.textContent = `Ksh ${balance.toFixed(2)}`;
    }
    
    updateSavingsProgress();
    updateTradingProgress();
}

function updateSavingsProgress() {
    const savingsGoal = JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVINGS_GOAL) || '{"target": 20000, "current": 0}');
    
    const totalIncome = state.transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
    
    savingsGoal.current = totalIncome * 0.33;
    localStorage.setItem(STORAGE_KEYS.SAVINGS_GOAL, JSON.stringify(savingsGoal));
    
    const progress = document.getElementById('savingsProgress');
    const goalText = document.getElementById('savingsGoalText');
    
    if (progress && savingsGoal.target > 0) {
        const percentage = Math.min((savingsGoal.current / savingsGoal.target) * 100, 100);
        progress.style.width = `${percentage}%`;
    }
    
    if (goalText) {
        goalText.textContent = `Ksh ${savingsGoal.current.toFixed(0)} / Ksh ${savingsGoal.target.toFixed(0)}`;
    }
}

function updateTradingProgress() {
    const tradingGoal = JSON.parse(localStorage.getItem(STORAGE_KEYS.TRADING_GOAL) || '{"target": 1000, "current": 0}');
    
    const totalIncome = state.transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
    
    tradingGoal.current = totalIncome * 0.20;
    localStorage.setItem(STORAGE_KEYS.TRADING_GOAL, JSON.stringify(tradingGoal));
    
    const progress = document.getElementById('tradingProgress');
    const goalText = document.getElementById('tradingGoalText');
    
    if (progress && tradingGoal.target > 0) {
        const percentage = Math.min((tradingGoal.current / tradingGoal.target) * 100, 100);
        progress.style.width = `${percentage}%`;
    }
    
    if (goalText) {
        goalText.textContent = `$${(tradingGoal.current / 150).toFixed(0)} / $1,000`;
    }
}

// ============================================
// Dashboard Tasks
// ============================================
function renderDashboardTasks() {
    const container = document.getElementById('dashboardTasks');
    if (!container) return;
    
    const todayTasks = state.tasks.filter(task => task.date === getToday());
    
    if (todayTasks.length === 0) {
        container.innerHTML = '<div class="empty-state">No tasks for today</div>';
        return;
    }
    
    container.innerHTML = todayTasks.slice(0, 5).map(task => `
        <div class="checklist-item">
            <input type="checkbox" ${task.completed ? 'checked' : ''} 
                onchange="toggleTaskComplete(${task.id})">
            <label style="${task.completed ? 'text-decoration: line-through; color: var(--gray);' : ''}">${task.title}</label>
        </div>
    `).join('');
}

// ============================================
// Streak
// ============================================
function updateStreak() {
    const today = getToday();
    let streak = 0;
    
    const dayOfWeek = new Date().getDay();
    const dayMap = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDayName = dayMap[dayOfWeek];
    
    const todaySchedule = state.timetable[currentDayName] || [];
    const completedSchedule = todaySchedule.filter(s => s.completed).length;
    const todayTasks = state.tasks.filter(t => t.date === today && t.completed).length;
    
    if (completedSchedule > 0 || todayTasks > 0) {
        let checkDate = new Date(today);
        
        while (true) {
            const dateStr = checkDate.toISOString().split('T')[0];
            const dayIdx = checkDate.getDay();
            const dayName = dayMap[dayIdx];
            
            const daySchedule = state.timetable[dayName] || [];
            const dayScheduleCompleted = daySchedule.filter(s => s.completed).length;
            const dayTasks = state.tasks.filter(t => t.date === dateStr && t.completed).length;
            
            if ((dayScheduleCompleted > 0 || dayTasks > 0) && checkDate <= new Date(today)) {
                streak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else {
                break;
            }
        }
    }
    
    const streakEl = document.getElementById('globalStreak');
    if (streakEl) {
        streakEl.textContent = streak;
    }
}

// ============================================
// Storage
// ============================================
// Utility Functions
// ============================================

// Sanitize HTML to prevent XSS attacks
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key);
    try {
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Failed to parse data from storage:', e);
        return null;
    }
}

// ============================================
// Backup & Restore Functions
// ============================================

function initializeBackup() {
    // Export button handler
    document.getElementById('exportBtn').addEventListener('click', exportData);
    
    // Import button handler
    document.getElementById('importBtn').addEventListener('click', () => {
        document.getElementById('importFile').click();
    });
    
    // File input handler
    document.getElementById('importFile').addEventListener('change', importData);
}

function exportData() {
    const backup = {
        version: '1.0',
        timestamp: new Date().toISOString(),
        data: {}
    };
    
    // Export all data from localStorage
    Object.keys(STORAGE_KEYS).forEach(key => {
        const value = localStorage.getItem(STORAGE_KEYS[key]);
        if (value) {
            backup.data[key] = JSON.parse(value);
        }
    });
    
    // Also export last date tracking
    backup.data.lastDate = localStorage.getItem('sitemendr_last_date');
    
    // Create and download the file
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sitemendr-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showSaveIndicator();
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const backup = JSON.parse(e.target.result);
            
            // Validate backup structure
            if (!backup.data || !backup.version) {
                alert('Invalid backup file format');
                return;
            }
            
            // Confirm before overwriting
            if (!confirm('This will replace all your current data. Continue?')) {
                return;
            }
            
            // Restore all data
            if (backup.data.tasks !== undefined) {
                localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(backup.data.tasks));
            }
            if (backup.data.timetable !== undefined) {
                localStorage.setItem(STORAGE_KEYS.TIMETABLE, JSON.stringify(backup.data.timetable));
            }
            if (backup.data.transactions !== undefined) {
                localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(backup.data.transactions));
            }
            if (backup.data.fitness !== undefined) {
                localStorage.setItem(STORAGE_KEYS.FITNESS, JSON.stringify(backup.data.fitness));
            }
            if (backup.data.editableData !== undefined) {
                localStorage.setItem(STORAGE_KEYS.EDITABLE_DATA, JSON.stringify(backup.data.editableData));
            }
            if (backup.data.calendarData !== undefined) {
                localStorage.setItem(STORAGE_KEYS.CALENDAR_DATA, JSON.stringify(backup.data.calendarData));
            }
            if (backup.data.tradingGoal !== undefined) {
                localStorage.setItem(STORAGE_KEYS.TRADING_GOAL, JSON.stringify(backup.data.tradingGoal));
            }
            if (backup.data.savingsGoal !== undefined) {
                localStorage.setItem(STORAGE_KEYS.SAVINGS_GOAL, JSON.stringify(backup.data.savingsGoal));
            }
            if (backup.data.lastDate !== undefined) {
                localStorage.setItem('sitemendr_last_date', backup.data.lastDate);
            }
            
            // Reload data and refresh UI
            loadData();
            loadEditableContent();
            updateAllDisplays();
            renderCalendar();
            
            alert('Data restored successfully!');
            showSaveIndicator();
        } catch (err) {
            console.error('Failed to import data:', err);
            alert('Failed to import data. Invalid file format.');
        }
    };
    reader.readAsText(file);
    
    // Reset file input
    event.target.value = '';
}

// ============================================
// Update All Displays
// ============================================
function updateAllDisplays() {
    renderTodaySchedule();
    renderDashboardTasks();
    renderTasks();
    renderTransactions();
    renderFinanceSnapshot();
}

// Make functions globally available
window.toggleTaskComplete = toggleTaskComplete;
window.deleteTask = deleteTask;
window.toggleTimeBlock = toggleTimeBlock;
window.editTimeBlock = editTimeBlock;

// ============================================
// Sub-tabs
// ============================================
function initializeSubTabs() {
    const subTabs = document.querySelectorAll('.sub-tab');
    
    subTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Find the closest parent that contains sub-tabs for this group
            const parent = tab.closest('.tab-content, .sub-tab-content');
            const subTabId = tab.dataset.subtab;
            
            // Remove active from all sub-tabs in this parent container
            parent.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
            // Add active to clicked tab
            tab.classList.add('active');
            
            // Hide all sub-tab content in this parent container
            parent.querySelectorAll('.sub-tab-content').forEach(content => content.classList.remove('active'));
            // Show the selected sub-tab content
            const content = document.getElementById(subTabId);
            if (content) {
                content.classList.add('active');
            }
        });
    });
}

// ============================================
// Add Fitness Day
// ============================================
function addFitnessDay() {
    const container = document.getElementById('fitnessContainer');
    if (!container) return;
    
    // Count existing days
    const existingDays = container.querySelectorAll('.fitness-day').length;
    const newDayNum = existingDays + 1;
    
    // Create new fitness day element
    const dayEl = document.createElement('div');
    dayEl.className = 'fitness-day';
    dayEl.setAttribute('data-day', newDayNum);
    dayEl.innerHTML = `
        <div class="fitness-day-header">
            <h3 contenteditable="true" class="editable">DAY ${newDayNum} – New Workout</h3>
            <input type="checkbox" class="fitness-check">
        </div>
        <div class="fitness-details" contenteditable="true" class="editable">
            <ul>
                <li><strong>Exercise 1</strong> – 3×10</li>
                <li><strong>Exercise 2</strong> – 3×10</li>
                <li><strong>Exercise 3</strong> – 3×10</li>
                <li><strong>Exercise 4</strong> – 3×10</li>
            </ul>
            <p class="fitness-target">👉 Add your target muscles here</p>
        </div>
    `;
    
    container.appendChild(dayEl);
    
    // Save to localStorage
    saveFitnessData();
}

// ============================================
// Save Fitness Data
// ============================================
function saveFitnessData() {
    const container = document.getElementById('fitnessContainer');
    if (!container) return;
    
    const fitnessData = [];
    container.querySelectorAll('.fitness-day').forEach((day, index) => {
        const title = day.querySelector('h3')?.innerText || `DAY ${index + 1}`;
        const details = day.querySelector('.fitness-details')?.innerHTML || '';
        fitnessData.push({ day: index + 1, title, details });
    });
    
    localStorage.setItem('sitemendr_fitness', JSON.stringify(fitnessData));
}
