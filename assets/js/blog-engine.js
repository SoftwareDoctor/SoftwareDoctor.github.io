$(function() {
    const itemsPerPage = 5;
    let currentPage = 1;
    let currentCategory = 'all';

    const $postsContainer = $('#blog-posts');
    const $paginationContainer = $('#pagination');
    const allPosts = $('.blog-item').toArray();

    function updateDisplay() {
        // Filter by category
        let filteredPosts = allPosts;
        if (currentCategory !== 'all') {
            filteredPosts = allPosts.filter(post => $(post).data('category') === currentCategory);
        }

        // Calculate pagination
        const totalItems = filteredPosts.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        // Hide all first
        $(allPosts).hide();

        // Show items for current page
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageItems = filteredPosts.slice(start, end);

        $(pageItems).fadeIn();

        // Render pagination buttons
        renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
        $paginationContainer.empty();
        if (totalPages <= 1) return;

        const $ul = $('<ul class="actions small"></ul>');

        for (let i = 1; i <= totalPages; i++) {
            const $li = $('<li></li>');
            const $btn = $(`<a href="#" class="button small ${i === currentPage ? '' : 'alt'}">${i}</a>`);
            
            $btn.on('click', function(e) {
                e.preventDefault();
                currentPage = i;
                updateDisplay();
                $('html, body').animate({ scrollTop: $('#main').offset().top }, 500);
            });

            $li.append($btn);
            $ul.append($li);
        }

        $paginationContainer.append($ul);
    }

    // Category click handler
    $('.filter-btn').on('click', function(e) {
        e.preventDefault();
        currentCategory = $(this).data('category');
        currentPage = 1; // Reset to page 1 on filter change
        updateDisplay();
        
        // Visual feedback for active category (optional)
        $('.filter-btn').css('font-weight', 'normal');
        $(this).css('font-weight', 'bold');
    });

    // Initial display
    updateDisplay();
});
