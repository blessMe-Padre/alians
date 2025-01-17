// Добавляет вкладку "Продукция" для меню админки Wordpress"
add_action('init', 'create_post_type');
function create_post_type()
{
    register_post_type(
        'product',
        array(
            'public' => true,
            'has_archive' => true,
            'exclude_from_search' => false,
            'publicly_queryable' => true,
            'labels' => array(
                'name' => 'Продукция',
                'singular_name' => 'Продукция',
                'menu_name' => 'Продукция',
                'all_items' => 'Вся продукция',
            ),
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields', 'page-attributes'),
            'taxonomies' => array('category'),
            'show_in_rest'=> true,
            'rest_base'          => 'product',
            'rest_controller_class' => 'WP_REST_Posts_Controller',
        )
    );
}


add_action('rest_api_init', function() {
    register_rest_field('product', 'acf_fields', array(
        'get_callback' => function($post_arr) {
            return get_fields($post_arr['id']); // Returns all ACF fields
        },
        'schema' => null,
    ));
});

// при перезагрузке странице на роутах чинит 404
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
